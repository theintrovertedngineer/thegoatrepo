# about
[Youtube video](https://www.youtube.com/playlist?list=PL8eP09J4P_IhSJ9dyKh5bboMzzDmsHaJC)
# requirements
- [Bun](https://bun.com)
- PostgreSQL database connection connection
  - example using [Podman](https://podman.io/docs/installation)
    ```bash
    podman run -d \
      --name mypgdb_ctnr \
      -p 8888:5432 \
      -e POSTGRES_USER=myuser \
      -e POSTGRES_PASSWORD=mydbpw \
      -e POSTGRES_DB=mydb \
      -v mydb-data:/var/lib/postgresql/ \
      docker.io/postgres:latest
    ```
And the connection string would be: `postgresql://myuser:mydbpw@localhost:8888/mydb`

# testing the current setup
- run `bun install` from the root directory
- then run `bun run:elysia` to run the Elysia backend
  - you can now send HTTP requests to its two test endpoints, i.e., `/home` and `/lang`
- or you can test the endpoints with Eden Treaty via the API client app
  - from the root directory, run `bun run:eden`

# coming next ..
- in the next video we'll bring in [Drizzle](https://orm.drizzle.team/docs/overview) and start setting up our `packages/db` package.
