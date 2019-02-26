JAVA=${JAVA:-/usr/bin/java}
OPENAPI_CODEGEN=~/bin/openapi-generator-cli.jar

$JAVA -jar $OPENAPI_CODEGEN generate -i config/openapi.json -g javascript -c config/swagger.conf

cp templates/* templates/.* .
