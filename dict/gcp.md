# Google Cloud Platform (구글은 신이다!)

## gcp 방화벽 구성

gcp는 기본적으로 OS에서 제공하는 방화벽 외에도 구글의 자체 (gcp를 위해 구성된)방화벽을 통과한다. 따라서 임의의 포트를 개방하고 싶다면 꼭 두가지 설정을 해줘야 한다.  

### 1. VPC 네트워크 방화벽 정책 설정

gcp의 방화벽은 프로젝트별로 관리된다. 따라서 먼저 해당 프로젝트의 방화벽에 정책을 설정한다.

![방화벽 위치](https://github.com/azza999/small-start/blob/main/assets/210714/gcp-firewall.png)
<p style="text-align:center">방화벽 설정 페이지</p>

![정책 설정](https://github.com/azza999/small-start/blob/main/assets/210714/new-policy.png)
<p style="text-align:center">새로운 정책 설정</p>

### 2. VM 인스턴스 네트워크 태그 설정

방화벽 정책 설정이 완료되면 해당 정책과 vm 인스턴스의 네트워크 태그를 매칭시켜준다.

![네트워크 태그 설정](https://github.com/azza999/small-start/blob/main/assets/210714/network-tag.png)
<p style="text-align:center">네트워크 태그 설정</p>

처음 VM 인스턴스를 생성할때 http-server와 https-server의 네트워크 트래픽을 허용했지만, 테스트용으로 3000 Port를 추가로 개방해줬다.