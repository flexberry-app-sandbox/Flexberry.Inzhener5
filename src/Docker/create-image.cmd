docker build --no-cache -f SQL\Dockerfile.PostgreSql -t inzhener5/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t inzhener5/app ../..
