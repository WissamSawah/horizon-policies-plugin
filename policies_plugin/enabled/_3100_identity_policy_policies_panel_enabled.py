#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


# The slug of the panel to be added to HORIZON_CONFIG. Required.
PANEL = 'policies'

# The slug of the panel group the PANEL is associated with.
PANEL_GROUP = 'default'

# The slug of the dashboard the PANEL associated with. Required.
PANEL_DASHBOARD = 'identity'

# Python panel class of the PANEL to be added.
ADD_PANEL = (
    'policies_plugin.dashboards.identity.policy.panel'
    '.Policies')

# A list of applications to be prepended to INSTALLED_APPS
ADD_INSTALLED_APPS = ['policies_plugin']

# A list of AngularJS modules to be loaded when Angular bootstraps.
ADD_ANGULAR_MODULES = [
    'horizon.dashboard.identity.policy'
]

# A list of js files to be included in the compressed set of files
ADD_JS_FILES = [
    'horizon/lib/angular/angular-route.js'
]

ADD_JS_SPEC_FILES = [
    'dashboard/identity/policy/policies/components/policies-table/'
    'policies-table.controller.spec.js',
    'dashboard/identity/policy/policies/components/policies-search/'
    'policies-search.controller.spec.js',
    'dashboard/identity/policy/policies/components/policies-pagination/'
    'policies-pagination.controller.spec.js'
]

# A list of scss files to be included in the compressed set of files
ADD_SCSS_FILES = ['dashboard/identity/policy/policies/policies.scss']

# Automatically discover static resources in installed apps
AUTO_DISCOVER_STATIC_FILES = True
