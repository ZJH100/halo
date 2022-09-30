package run.halo.app.theme;

import java.util.Map;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import run.halo.app.infra.SystemConfigurableEnvironmentFetcher;
import run.halo.app.theme.finders.vo.SiteSettingVo;

/**
 * Site setting variables acquirer.
 *
 * @author guqing
 * @since 2.0.0
 */
@Component
public class SiteSettingVariablesAcquirer implements ViewContextBasedVariablesAcquirer {

    private final SystemConfigurableEnvironmentFetcher environmentFetcher;

    public SiteSettingVariablesAcquirer(SystemConfigurableEnvironmentFetcher environmentFetcher) {
        this.environmentFetcher = environmentFetcher;
    }

    @Override
    public Mono<Map<String, Object>> acquire(ServerWebExchange exchange) {
        return environmentFetcher.getConfigMap()
            .filter(configMap -> configMap.getData() != null)
            .map(configMap -> {
                SiteSettingVo siteSettingVo = SiteSettingVo.from(configMap);
                return Map.of("site", siteSettingVo);
            });
    }
}