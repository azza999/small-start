# 네트워크

## LG bit와 IG bit (TCP)

_LG bit_

Default MAC 주소인지 자체적으로 부여한 주소인지를 식별하는 FLAG

_IG BIT_

TCP에서 멀티캐스트 통신과 유니캐스트 통신을 구분하는 FLAG


※ 질문 : MAC 주소에서 LG bit와 IG bit가 변한다면, 원본 MAC 주소에도 영향을 주는거 아닌가요?

LG bit가 변한다면 이미 변한 MAC 주소이고, IG bit가 변할 때는 브로드캐스트 이거나(FF:FF:FF:FF:FF:FF), 멀티캐스트 주소를 사용하므로 원본 MAC 주소는 변할 일이 없다.
