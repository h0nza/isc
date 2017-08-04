default : help//npm #webpack

help//% :
	mvn help:describe -Dgoal=$* -Ddetail=true -Dplugin=com.github.eirslett:frontend-maven-plugin

npm-install--save//% :
	PATH="$(PWD)/node/":$(PATH) node "node/node_modules/npm/bin/npm-cli.js" install --save $*

npm-install--save-dev//% :
	PATH="$(PWD)/node/":$(PATH) node "node/node_modules/npm/bin/npm-cli.js" install --save-dev $*
	
build :
	PATH="$(PWD)/node/":$(PATH) node "node/node_modules/npm/bin/npm-cli.js" run $*

#local/private npm repository:
#https://www.sitepoint.com/private-npm-packages-verdaccio/

registry = http://localhost:4873

#or ~/.npmrc  ./.npmrc
set-registry :
	PATH="$(PWD)/node/":$(PATH) node "node/node_modules/npm/bin/npm-cli.js" set registry $(registry)
	
adduser :
	PATH="$(PWD)/node/":$(PATH) node "node/node_modules/npm/bin/npm-cli.js" adduser --registry $(registry)

publish :
	PATH="$(PWD)/node/":$(PATH) node "node/node_modules/npm/bin/npm-cli.js" --force unpublish || :
	PATH="$(PWD)/node/":$(PATH) node "node/node_modules/npm/bin/npm-cli.js" publish scripts/typings/isc -dd


#If you’re just following the steps along this article and later want to revert to the original npm registry just run this command:
#  npm set registry https://registry.npmjs.org for HTTPS-based access, or npm set registry http://registry.npmjs.org for classic HTTP access.
#Additionally, if you serve your registry via HTTPS you’ll need to set appropriate CA information.
# setting the value to null will use the list provided by the operating system
#npm set ca null