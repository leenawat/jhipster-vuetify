/**
 * Copyright 2013-2019 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mkdirp = require('mkdirp');
const constants = require('generator-jhipster/generators/generator-constants');
const utils = require('../utils');

const MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;
const TEST_SRC_DIR = constants.CLIENT_TEST_SRC_DIR;
const VUE_DIR = constants.ANGULAR_DIR;
const CLIENT_VUE_TEMPLATES_DIR = 'vue';

module.exports = {
    writeFiles
};

const vueFiles = {
    common: [
        {
            templates: [
                'package.json',
                'tsconfig.json',
                '.huskyrc',
                '.postcssrc.js',
                'tslint.json',
                'config/index.js',
                'config/dev.env.js',
                'config/prod.env.js',
                'webpack/webpack.common.js',
                'webpack/webpack.dev.js',
                'webpack/webpack.prod.js',
                'webpack/vue.utils.js',
                'webpack/loader.conf.js',
                'webpack/utils.js'
            ]
        },
        {
            condition: generator => generator.protractorTests,
            templates: ['tsconfig.e2e.json']
        }
    ],
    image: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                { file: 'content/images/jhipster_family_member_0.svg', method: 'copy' },
                { file: 'content/images/jhipster_family_member_1.svg', method: 'copy' },
                { file: 'content/images/jhipster_family_member_2.svg', method: 'copy' },
                { file: 'content/images/jhipster_family_member_3.svg', method: 'copy' },
                { file: 'content/images/jhipster_family_member_0_head-192.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_1_head-192.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_2_head-192.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_3_head-192.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_0_head-256.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_1_head-256.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_2_head-256.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_3_head-256.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_0_head-384.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_1_head-384.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_2_head-384.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_3_head-384.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_0_head-512.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_1_head-512.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_2_head-512.png', method: 'copy' },
                { file: 'content/images/jhipster_family_member_3_head-512.png', method: 'copy' },
                { file: 'content/images/logo-jhipster.png', method: 'copy' }
            ]
        }
    ],
    css: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'content/css/loading.css'
            ]
        }
    ],
    sass: [
        {
            path: MAIN_SRC_DIR,
            templates: ['content/scss/_bootstrap-variables.scss', 'content/scss/global.scss', 'content/scss/vendor.scss']
        },
        {
            condition: generator => generator.enableI18nRTL,
            path: MAIN_SRC_DIR,
            templates: ['content/scss/rtl.scss']
        }
    ],
    swagger: [
        {
            path: MAIN_SRC_DIR,
            templates: ['swagger-ui/index.html', { file: 'swagger-ui/dist/images/throbber.gif', method: 'copy' }]
        }
    ],
    commonWeb: [
        {
            path: MAIN_SRC_DIR,
            templates: [
                'WEB-INF/web.xml',
                { file: 'favicon.ico', method: 'copy' },
                'robots.txt',
                '404.html',
                'index.html',
                'manifest.webapp'
            ]
        }
    ],
    vueApp: [
        {
            path: VUE_DIR,
            templates: [
                'app.vuetify',
                'app.component.ts',
                'shims-vue.d.ts',
                'constants.ts',
                'main.ts',
                'shared/config/axios-interceptor.ts',
                'shared/config/config.ts',
                'shared/config/config-bootstrap-vue.ts',
                'shared/config/vuetify.js',
                'router/index.ts'
            ]
        }
    ],
    i18n: [
        {
            condition: generator => generator.enableTranslation,
            path: VUE_DIR,
            templates: [
                'locale/translation.service.ts',
                'shared/config/formatter.ts'
            ]
        }
    ],
    sharedVueApp: [
        {
            path: VUE_DIR,
            templates: [
                'core/home/home.vuetify',
                'core/home/home.component.ts',
                'core/error/error.vuetify',
                'core/error/error.component.ts',
                'core/jhi-footer/jhi-footer.vuetify',
                'core/jhi-footer/jhi-footer.component.ts',
                'core/jhi-navbar/jhi-navbar.vuetify',
                'core/jhi-navbar/jhi-navbar.component.ts',
                'core/ribbon/ribbon.vuetify',
                'core/ribbon/ribbon.component.ts',
                'shared/date/filters.ts',
                'shared/sort/sorts.ts',
                'shared/alert/alert.service.ts',
                'shared/data/data-utils.service.ts',
                'shared/jhi-item-count.component.ts',
                'shared/jhi-item-count.vuetify',
                'shared/validation/vuelidate-vuetify.mixin.ts',
                'shared/model/user.model.ts'
            ]
        }
    ],
    accountModule: [
        {
            path: VUE_DIR,
            templates: [
                'account/account.service.ts'
            ]
        },
        {
            condition: generator => generator.authenticationType !== 'oauth2',
            path: VUE_DIR,
            templates: [
                'account/change-password/change-password.vuetify',
                'account/change-password/change-password.component.ts',
                'account/login-form/login-form.vuetify',
                'account/login-form/login-form.component.ts',
                'account/login.service.ts',
                'account/register/register.vuetify',
                'account/register/register.component.ts',
                'account/register/register.service.ts',
                'account/reset-password/init/reset-password-init.vuetify',
                'account/reset-password/init/reset-password-init.component.ts',
                'account/reset-password/finish/reset-password-finish.vuetify',
                'account/reset-password/finish/reset-password-finish.component.ts',
                'account/settings/settings.vuetify',
                'account/settings/settings.component.ts',
                'account/activate/activate.component.ts',
                'account/activate/activate.service.ts',
                'account/activate/activate.vuetify'
            ]
        },
        {
            condition: generator => generator.authenticationType === 'session',
            path: VUE_DIR,
            templates: [
                'account/sessions/sessions.vuetify',
                'account/sessions/sessions.component.ts'
            ]
        },
        {
            condition: generator => generator.authenticationType === 'oauth2',
            path: VUE_DIR,
            templates: [
                'account/login.service.ts'
            ]
        }
    ],
    adminModule: [
        {
            path: VUE_DIR,
            templates: [
                // admin modules
                'admin/configuration/configuration.vuetify',
                'admin/configuration/configuration.component.ts',
                'admin/configuration/configuration.service.ts',
                'admin/docs/docs.vuetify',
                'admin/docs/docs.component.ts',
                'admin/health/health.vuetify',
                'admin/health/health.component.ts',
                'admin/health/health-modal.vuetify',
                'admin/health/health-modal.component.ts',
                'admin/health/health.service.ts',
                'admin/logs/logs.vuetify',
                'admin/logs/logs.component.ts',
                'admin/logs/logs.service.ts',
                'admin/audits/audits.vuetify',
                'admin/audits/audits.component.ts',
                'admin/audits/audits.service.ts',
                'admin/metrics/metrics.vuetify',
                'admin/metrics/metrics.component.ts',
                'admin/metrics/metrics.service.ts',
                'admin/metrics/metrics-modal.vuetify',
                'admin/metrics/metrics-modal.component.ts'
            ]
        },
        {
            condition: generator => generator.websocket === 'spring-websocket',
            path: VUE_DIR,
            templates: [
                'admin/tracker/tracker.vuetify',
                'admin/tracker/tracker.component.ts',
                'admin/tracker/tracker.service.ts'
            ]
        },
        {
            condition: generator => !generator.skipUserManagement,
            path: VUE_DIR,
            templates: [
                'admin/user-management/user-management.vuetify',
                'admin/user-management/user-management.component.ts',
                'admin/user-management/user-management-view.vuetify',
                'admin/user-management/user-management-view.component.ts',
                'admin/user-management/user-management-edit.vuetify',
                'admin/user-management/user-management-edit.component.ts',
                'admin/user-management/user-management.service.ts'
            ]
        },
        {
            condition: generator => generator.applicationType === 'gateway' && generator.serviceDiscoveryType,
            path: VUE_DIR,
            templates: [
                'admin/gateway/gateway.vuetify',
                'admin/gateway/gateway.component.ts',
                'admin/gateway/gateway.service.ts'
            ]
        }
    ],
    clientTestConfig: [
        {
            path: TEST_SRC_DIR,
            templates: [
                'jest.conf.js',
            ]
        }
    ],
    clientTestFw: [
        {
            path: TEST_SRC_DIR,
            templates: [
                'jest.conf.js',
                'spec/app/account/account.service.spec.ts',
                'spec/app/core/home/home.component.spec.ts',
                'spec/app/core/error/error.component.spec.ts',
                'spec/app/core/jhi-footer/jhi-footer.component.spec.ts',
                'spec/app/core/jhi-navbar/jhi-navbar.component.spec.ts',
                'spec/app/core/ribbon/ribbon.component.spec.ts',
                'spec/app/shared/alert/alert.service.spec.ts',
                'spec/app/shared/config/axios-interceptor.spec.ts',
                'spec/app/shared/data/data-utils.service.spec.ts',
                'spec/app/admin/configuration/configuration.component.spec.ts',
                'spec/app/admin/docs/docs.component.spec.ts',
                'spec/app/admin/health/health.component.spec.ts',
                'spec/app/admin/health/health-modal.component.spec.ts',
                'spec/app/admin/health/health.service.spec.ts',
                'spec/app/admin/logs/logs.component.spec.ts',
                'spec/app/admin/audits/audits.component.spec.ts',
                'spec/app/admin/metrics/metrics.component.spec.ts',
                'spec/app/admin/metrics/metrics-modal.component.spec.ts'
            ]
        },
        {
            condition: generator => generator.enableTranslation,
            path: TEST_SRC_DIR,
            templates: [
                'spec/app/shared/config/formatter.spec.ts',
            ]
        },
        {
            condition: generator => generator.authenticationType === 'oauth2',
            path: TEST_SRC_DIR,
            templates: [
                'spec/app/account/login.service.spec.ts'
            ]
        },
        {
            condition: generator => generator.authenticationType === 'session',
            path: TEST_SRC_DIR,
            templates: [
                'spec/app/account/sessions/sessions.component.spec.ts',
                'spec/app/account/login.service.spec.ts'
            ]
        },
        {
            condition: generator => generator.authenticationType !== 'oauth2',
            path: TEST_SRC_DIR,
            templates: [
                'spec/app/account/change-password/change-password.component.spec.ts',
                'spec/app/account/login-form/login-form.component.spec.ts',
                'spec/app/account/register/register.component.spec.ts',
                'spec/app/account/reset-password/init/reset-password-init.component.spec.ts',
                'spec/app/account/reset-password/finish/reset-password-finish.component.spec.ts',
                'spec/app/account/settings/settings.component.spec.ts',
                'spec/app/account/activate/activate.component.spec.ts'
            ]
        },
        {
            condition: generator => generator.databaseType !== 'no' && generator.databaseType !== 'cassandra',
            path: TEST_SRC_DIR,
            templates: ['spec/app/admin/audits/audits.component.spec.ts']
        },
        {
            condition: generator => generator.websocket === 'spring-websocket',
            path: TEST_SRC_DIR,
            templates: [
                'spec/app/admin/tracker/tracker.component.spec.ts',
                'spec/app/admin/tracker/tracker.service.spec.ts'
            ]
        },
        {
            condition: generator => !generator.skipUserManagement,
            path: TEST_SRC_DIR,
            templates: [
                'spec/app/admin/user-management/user-management.component.spec.ts',
                'spec/app/admin/user-management/user-management-view.component.spec.ts',
                'spec/app/admin/user-management/user-management-edit.component.spec.ts'
            ]
        },
        {
            condition: generator => generator.applicationType === 'gateway' && generator.serviceDiscoveryType,
            path: TEST_SRC_DIR,
            templates: [
                'spec/app/admin/gateway/gateway.component.spec.ts'
            ]
        },
        {
            condition: generator => generator.protractorTests,
            path: TEST_SRC_DIR,
            templates: [
                'e2e/modules/account/account.spec.ts',
                'e2e/modules/administration/administration.spec.ts',
                'e2e/util/utils.ts',
                'e2e/page-objects/base-component.ts',
                'e2e/page-objects/navbar-page.ts',
                'e2e/page-objects/signin-page.ts',
                'protractor.conf.js'
            ]
        },
        {
            condition: generator => generator.protractorTests && generator.authenticationType !== 'oauth2',
            path: TEST_SRC_DIR,
            templates: [
                'e2e/page-objects/password-page.ts',
                'e2e/page-objects/settings-page.ts',
                'e2e/page-objects/register-page.ts'
            ]
        }
    ]
};

function writeFiles() {
    mkdirp(MAIN_SRC_DIR);
    // write Vue.js files
    this.writeFilesToDisk(vueFiles, this, false, `${CLIENT_VUE_TEMPLATES_DIR}`);

    if (!this.enableTranslation) {
        utils.replaceTranslation(this, ['app/app.vuetify',
            'app/core/home/home.vuetify',
            'app/core/error/error.vuetify',
            'app/core/jhi-footer/jhi-footer.vuetify',
            'app/core/jhi-navbar/jhi-navbar.vuetify',
            'app/core/ribbon/ribbon.vuetify',
            'app/shared/jhi-item-count.vuetify',
            'app/admin/configuration/configuration.vuetify',
            'app/admin/health/health.vuetify',
            'app/admin/health/health-modal.vuetify',
            'app/admin/logs/logs.vuetify',
            'app/admin/metrics/metrics.vuetify',
            'app/admin/metrics/metrics-modal.vuetify',
            'app/admin/audits/audits.vuetify'
        ]);
        if (this.authenticationType !== 'oauth2') {
            utils.replaceTranslation(this, ['app/account/change-password/change-password.vuetify',
                'app/account/activate/activate.vuetify',
                'app/account/login-form/login-form.vuetify',
                'app/account/register/register.vuetify',
                'app/account/reset-password/init/reset-password-init.vuetify',
                'app/account/reset-password/finish/reset-password-finish.vuetify',
                'app/account/settings/settings.vuetify',
                'app/admin/user-management/user-management.vuetify',
                'app/admin/user-management/user-management-view.vuetify',
                'app/admin/user-management/user-management-edit.vuetify'
            ]);
        }
        if (this.authenticationType === 'session') {
            utils.replaceTranslation(this, ['app/account/sessions/sessions.vuetify']);
        }
        if (this.applicationType === 'gateway' && this.serviceDiscoveryType) {
            utils.replaceTranslation(this, ['app/admin/gateway/gateway.vuetify']);
        }
        if (this.websocket === 'spring-websocket') {
            utils.replaceTranslation(this, ['app/admin/tracker/tracker.vuetify']);
        }
    }
}
