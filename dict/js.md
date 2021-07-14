# javascript

## 사용자 camera 접근

<pre><code>navigator.mediaDevices.getUserMedia(constraints)</code></pre>

### return type

`Promise`

resolve: mediastream  
reject: NotFoundError, NotAllowedError, Security Error. etc.  

[MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)