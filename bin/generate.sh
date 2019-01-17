JAVA=${JAVA:-/usr/bin/java}
SWAGGER_CODEGEN=${CODEGEN:-~/bin/swagger-codegen-cli.jar}

$JAVA -jar $SWAGGER_CODEGEN generate -c conf/swagger.conf -l javascript -i conf/swagger-2-v0.0.1.yaml