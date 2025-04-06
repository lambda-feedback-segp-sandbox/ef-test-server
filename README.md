# Evaluation Function Testing Server

This server is intended to be run locally while using the Response Area
Sandbox. It acts as a proxy between the Sandbox (running within a web browser)
and an evaluation function.

Web browsers send a [preflight
request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)
before every GET or POST request which uses the OPTIONS verb. Evaluation
functions (running locally or on AWS) are not configured to respond to OPTIONS
requests, so this proxy is responsible for replying to the preflight request and
forwarding just the POST request to the evaluation function.
