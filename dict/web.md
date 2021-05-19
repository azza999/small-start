# 웹개발 상식

면접 준비용  

## 웹 세션

 우리가 웹 페이지에 접속할 때, 양측은 서로의 정보를 저장할 필요가 있다. 가령 쇼핑몰에서 장바구니를 담는다던지, 쇼핑몰에 로그인을 한다던지 서버와 클라이언트가 서로의 정보를 알 필요가 있다. 이를 위해 '세션'과 '쿠키'가 준비되어 있다.  

### 세션과 쿠키의 차이점?

 가장 큰 차이는 세션은 server에, 쿠키는 client에 저장된다는 것이다. (server - session, client - cookie) 왜 클라이언트와 서버는 각자 서로의 정보를 저장해야 할까? 한쪽만 저장할 수는 없을까?  

### 세션의 문제점

 세션은 서버의 `메모리`에 저장된다. 메모리는 휘발성이고, 비싸고, 작다. 따라서 서버를 구동하는 프로그램이 꺼지면 메모리에 저장된 모든 세션 정보는 증발한다. 너무 많은 세션이 존재하게 되면, 메모리는 부족해질 것이고, 서버의 성능에도 영향을 미치고 더이상 세션을 설정할 수 없게 될 것이다.

 따라서 세션에 현재 접속중인 모든 유저의 정보를 저장할 수는 없기에, client 각자가 '나는 인증받은 사람이야'라고 증명하는 '입장권' 정도만 저장하고, 이외의 정보는 client 각자(cookie)가 보유하게 된다.