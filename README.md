# Autocannon Performance Testing

## Initial Setup

First, install the required dependencies:

```bash
npm install
```

## Step 1: Start the Server

First, start your backend server:

```bash
node server.js
```

Your backend should now be listening locally on port 3000.

Test the endpoint with curl:

```bash
curl "http://localhost:3000/api/v1/hello-world"
```

Note: If you're a Windows user, replace `curl` with `curl.exe`.

The result will be:

```json
"Hello, World!"
```

## Step 2: Install AutoCannon

### Global Installation

Execute the command below to install AutoCannon globally:

```bash
npm install -g autocannon
```

Verify that it works by running in the terminal:

```bash
autocannon
```

### Project Dependency Installation

If you want to add it as a project's dependency, run:

```bash
npm install autocannon
```

Then launch AutoCannon using:

```bash
npx autocannon
```


### Common Options
- `-c`: Number of concurrent connections (default: 10)
- `-d`: Duration of the test in seconds (default: 10)
- `-p`: Number of pipelined requests (default: 1)
- `-t`: Number of workers (default: 1)
- `-m`: HTTP method (default: GET)
- `-b`: Request body
- `-H`: HTTP headers


## Step 3: Run a Performance Test

While the server is running, open a new terminal window and run:

```bash
autocannon "http://localhost:3000/api/v1/hello-world"
```

This will:
- Send requests to the "Hello, World!" endpoint
- Run for 10 seconds (default duration)
- Use 10 concurrent connections (default)

### Customizing Test Parameters

You can modify the test parameters using CLI options. For example, to run with 50 concurrent connections for 30 seconds:

```bash
autocannon -c 50 -d 30 http://localhost:3000
```

Where:
- `-c` defines the number of concurrent connections
- `-d` sets the duration of the performance test in seconds

After the test completes, you'll see detailed performance metrics in the results.