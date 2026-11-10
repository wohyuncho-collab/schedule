# 일정이동 & 원가산정

업무 이동 보고 문구와 원가산정 메모를 만들어 주는 개인용 웹앱입니다. 폰에 설치(PWA)해서 앱처럼 씁니다.

## 구성
- `index.html` : 앱 본체 (v1.14)
- `manifest.webmanifest`, `sw.js` : 앱 설치·오프라인 실행용
- `icons/` : 앱 아이콘

## GitHub에 올리고 앱으로 설치하기
1. GitHub에서 새 저장소(Repository)를 만듭니다. (예: `schedule-cost-app`)
2. 이 폴더 안의 파일을 모두(`icons` 폴더 포함) 저장소에 올립니다. (Add file → Upload files)
3. 저장소 Settings → Pages → Source를 `Deploy from a branch`, Branch를 `main` / `(root)`로 저장합니다.
4. 1~2분 뒤 `https://<계정>.github.io/<저장소>/` 주소가 생깁니다.
5. 폰 Chrome으로 그 주소를 열고 메뉴 → `앱 설치` (또는 `홈 화면에 추가`)를 누릅니다.

## APK 파일로 만들고 싶을 때
https://www.pwabuilder.com 에 위 주소를 넣고 Android 패키지를 받으면 APK/AAB를 만들 수 있습니다.

## 수정해서 다시 올릴 때
`index.html`을 고친 뒤 `sw.js` 맨 위의 `VER` 숫자를 올려서(`ilj-v2` 등) 같이 올립니다. 그래야 폰에 새 버전이 반영됩니다.

## 참고
- 데이터(엑셀 내용, km 기록 등)는 폰 브라우저/앱 안에만 저장됩니다.
- 사진 글자 인식(km, 캘린더 캡처)은 처음 사용할 때 인터넷이 필요합니다.
