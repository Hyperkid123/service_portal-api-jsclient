JAVA=${JAVA:-/usr/bin/java}
SWAGGER_CODEGEN=${CODEGEN:-~/bin/swagger-codegen-cli.jar}

$JAVA -jar $SWAGGER_CODEGEN generate -c config/swagger.conf -l javascript -i config/swagger-2.yaml