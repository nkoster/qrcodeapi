
This is a _too simple_ example of a "REST API", that receives a string, and returns a QR code, as a base64 encoded PNG, in a JSON response, like:

```
{
  "qrcode": "<base64>"
}
 ```

### Dependencies

In my debian based linux:

```apt install qrencode``` # for the QR encoder

```apt install coreutils``` # for the program ```base64```

### Install

```
git clone https://github.com/nkoster/qrcodeapi
cd qrcodeapi
npm i
```

### Run

```
node start
```

You can now reach the API at localhost port 10010.

### Example

An example with ```curl```.

```
curl localhost:10010/https%3A%2F%2Fexample.com
````

returns

```
{"qrcode":"iVBORw0KGgoAAAANSUhEUgAAAGMAAABjAQMAAAC19SzWAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlP//8i138cAAAAJcEhZcwAACxIAAAsSAdLdfvwAAADpSURBVDiNzdS7DcMgEADQiyjcxQucxBp0XiksYOIJshIdayB5AV9HYflysfJrzNElyAWvOOl+Bvj7wB9rAfAFQ4STJuJ17JiSXDRFDAm8fC1iQ20aXfYt4jUk9J/MDvWoT/RV7ZHkUJynTwcPtTgcYX51oiZiex0AHPSqSg5xvjpDmrbObmA2yCdNS5fBmSk+M6tI8mWWIHvTtLgcipnSs4MVUbS3wpKLV5WwT+sFsNe0z0FWQJfMNhSJtqRp32t8V1tTxItMDCw1yEvWHU8NGgc8D6+eVcQStPYFVe17Lf/KTJp++y616g4DYbIJbESHagAAAABJRU5ErkJggg=="}
```

which is a JSON object, that contains a base64 encoded PNG, that presents a QR code,
that contains a string "https://example.com".

For testing, or for script based logic, you can easily create a URI with this command:

```
node -e "console.log(encodeURIComponent('https://example.com'))"
```

This returns the string ```https%3A%2F%2Fexample.com```, like in above ```curl``` example.

### HTML

I've added an HTML file, ```example.html```, which you can use as an example on how to use the API from within a web page.
