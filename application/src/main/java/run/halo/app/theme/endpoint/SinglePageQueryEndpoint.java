package run.halo.app.theme.endpoint;

import static org.springdoc.core.fn.builders.apiresponse.Builder.responseBuilder;
import static org.springdoc.core.fn.builders.parameter.Builder.parameterBuilder;

import io.swagger.v3.oas.annotations.enums.ParameterIn;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.fn.builders.operation.Builder;
import org.springdoc.webflux.core.fn.SpringdocRouteBuilder;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import run.halo.app.core.extension.content.SinglePage;
import run.halo.app.core.extension.endpoint.CustomEndpoint;
import run.halo.app.extension.GroupVersion;
import run.halo.app.extension.ListResult;
import run.halo.app.extension.router.SortableRequest;
import run.halo.app.theme.finders.SinglePageConversionService;
import run.halo.app.theme.finders.SinglePageFinder;
import run.halo.app.theme.finders.vo.ListedSinglePageVo;
import run.halo.app.theme.finders.vo.SinglePageVo;

/**
 * Endpoint for single page query.
 *
 * @author guqing
 * @since 2.5.0
 */
@Component
@RequiredArgsConstructor
public class SinglePageQueryEndpoint implements CustomEndpoint {

    private final SinglePageFinder singlePageFinder;

    private final SinglePageConversionService singlePageConversionService;

    @Override
    public RouterFunction<ServerResponse> endpoint() {
        var tag = "SinglePageV1alpha1Public";
        return SpringdocRouteBuilder.route()
            .GET("singlepages", this::listSinglePages,
                builder -> {
                    builder.operationId("querySinglePages")
                        .description("Lists single pages")
                        .tag(tag)
                        .response(responseBuilder()
                            .implementation(
                                ListResult.generateGenericClass(ListedSinglePageVo.class))
                        );
                    SinglePagePublicQuery.buildParameters(builder);
                }
            )
            .GET("singlepages/{name}", this::getByName,
                builder -> builder.operationId("querySinglePageByName")
                    .description("Gets single page by name")
                    .tag(tag)
                    .parameter(parameterBuilder()
                        .in(ParameterIn.PATH)
                        .name("name")
                        .description("SinglePage name")
                        .required(true)
                    )
                    .response(responseBuilder()
                        .implementation(SinglePageVo.class)
                    )
            )
            .build();
    }

    private Mono<ServerResponse> getByName(ServerRequest request) {
        var name = request.pathVariable("name");
        return singlePageFinder.getByName(name)
            .flatMap(result -> ServerResponse.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(result)
            );
    }

    private Mono<ServerResponse> listSinglePages(ServerRequest request) {
        var query = new SinglePagePublicQuery(request.exchange());
        return singlePageConversionService.listBy(query.toListOptions(), query.toPageRequest())
            .flatMap(result -> ServerResponse.ok().bodyValue(result));
    }

    static class SinglePagePublicQuery extends SortableRequest {

        public SinglePagePublicQuery(ServerWebExchange exchange) {
            super(exchange);
        }

        public static void buildParameters(Builder builder) {
            SortableRequest.buildParameters(builder);
        }
    }

    @Override
    public GroupVersion groupVersion() {
        return PublicApiUtils.groupVersion(new SinglePage());
    }
}
