# ๐ ์ํฐ๋ ํ๋ฆฌ์จ๋ณด๋ฉ ํ๋ก ํธ์๋ ์ฝ์ค 6์ฐจ ๊ณผ์ 

## ๊ณผ์  ์๊ฐ
- ๋ชฉํ : ํฌ์ ๊ด๋ฆฌ ์๋น์ค์ ๊ด๋ฆฌ์ ๊ธฐ๋ฅ ๊ตฌํ
- ์์๊ธฐ๊ฐ : 2022.09.20 ~ 2022.09.25

<br/>

## ๊ตฌํ ์์
authenticated ๊ด๋ จ

https://user-images.githubusercontent.com/103626175/192113638-4cff6e87-1a59-4aeb-8c95-1de9c6017f40.mp4

๊ณ์ข ๊ด๋ จ

https://user-images.githubusercontent.com/103626175/192114152-28554bb8-0a3a-4d67-b074-300debe4e62e.mp4

์ฌ์ฉ์ ๊ด๋ จ

https://user-images.githubusercontent.com/103626175/192114167-6e8fe968-0131-49a5-bc33-777d1ade962b.mp4

<br/>

## ํ์๋ค์ ์๊ฐํฉ๋๋ค.

|๋ฉค๋ฒ|๋ด๋น|ํฌ๋ถ|
|:--|:--|:--|
|[๊น์น๋ชจ(ํ์ฅ)](https://github.com/endmoseung)|ํ๋ก ํธ์๋|ํ๋ฆฌ์จ๋ณด๋ฉ ์ฝ์ค ์๋ฃํ ๊ด๋ จ๊ธฐ์ ์ทจ์์ฑ๊ณต!|
|[์์ฐ์](https://github.com/dndud2906)|ํ๋ก ํธ์๋|ํ๋ฆฌ์จ๋ณด๋ฉ ๊ธฐ๋ฐ์ผ๋ก ํ๋ฃจ๋นจ๋ฆฌ ์ด์ง|
|[์ด์ขํธ](https://github.com/devfrank9)|ํ๋ก ํธ์๋|์ํผ์ค ์๊ฒฐ ์ ์ ์คํ์์ค ์ปจํธ๋ฆฌ๋ทฐํฐ ๋ฌ๊ธฐ|
|[๋ฏผ์ ๊ฒฝ](https://github.com/MINYUKYUNG)|ํ๋ก ํธ์๋|10์ ์์ ์ทจ์ง!|
|[๊ฐ๋คํ](https://github.com/KKangdaa)|ํ๋ก ํธ์๋|์ค๋ฌด๋ฅผ ์๋ ์ ์๊ฐ๋ฐ์ ๋๊ธฐ|

<br/>

## Commit & Merge Convention

```
1. dev (๊ฐ๋ฐ) ๋ธ๋์น๋ฅผ ์์ฑํ๋ค.
2. ๊ฐ์ ์ฃผ์ด์ง ์์์ ๋ํ issue๋ฅผ ์์ฑํ๋ค.
3. ์์ฑ๋ issue ๋ฒํธ๋ก ๊ฐ๋ณ branch ์ด๋ฆ์ ๊ฐ๋๋ค
4. ๊ฐ๋ณ branch์์ ์์ํ Git ์ปจ๋ฒค์์ ๋ฐ๋ผ ์ปค๋ฐ ๋ฐ PR์ ํ๋ค.
5. ์ด๋, PR์ dev(๊ฐ๋ฐ)๋ก ํ๋ค.
6. ๋ชจ๋  issue close ๋ฐ ์์์ฌํญ ์์์ main์ผ๋ก dev(๊ฐ๋ฐ) ๋ธ๋์น๋ฅผ PRํ๋ค.
7. ์ดํ ์์ ๋ฐ์์ 1~6์ ๋ฐ๋ณตํ๋ค.
```
<br />

## ์คํ ๋ฐฉ๋ฒ

1. ๋ ํฌ์งํ ๋ฆฌ๋ฅผ `clone` ํฉ๋๋ค
```markdown
$ git clone https://github.com/Pre-HotSix/pre-onboarding-assignment-week-4-1-team-6
```
2. server ๋๋ฏธ ๋ฐ์ดํฐ๋ฅผ ์์ฑ ๋ฐ ์คํํฉ๋๋ค
```markdown
$ cd server
$ npm run gen
$ npm start
```
3. dependencies๋ฅผ ์ค์นํ๊ณ , ํ๋ก์ ํธ๋ฅผ ์คํํฉ๋๋ค
```markdown
$ cd client
$ npm install
$ npm start
```
<br/>

## ํด๋ ๊ตฌ์กฐ

```
root
โโโ .eslintrc
โโโ .vscode
โโโ .prettierrc
โโโ package-lock.json
โโโ package.json
โโโ public
|   โโโ favicon.ico
|   โโโ index.html
โโโ src
    โโโ apis
    โโโ assets
    โโโ constants
    โโโ components
    โโโ pages
    โโโ routes
    โโโ recoil
    โโโ styles
    โโโ hooks
    โโโ utils
    โโโ App.jsx
    โโโ index.js
```

|ํด๋|๊ตฌ๋ถ|
|:--|:--|
|apis|apiํจ์๋ค์ ๋ชจ์๋ ํด๋|
|assets|์ด๋ฏธ์ง๋ค์ ๋ชจ์๋ ํด๋(ํฐํธ๋ svg๋ ๋ค์ด๊ฐ ์ ์์)|
|constants|ant๋์์ธ ๊ด๋ จ ๋ก์ง ์ ์ํ ํด๋|
|components|์ฝ๋ ์ฌ์ฌ์ฉ์ ์ํ ์ปดํฌ๋ํธ ๊ด๋ฆฌํ ํด๋|
|pages|url์ฃผ์์ ๋ฐ๋ฅธ ํ์ด์ง ๊ตฌ์ฑ ํด๋|
|routes|๋ผ์ฐํ ๊ด๋ จ ์ฒ๋ฆฌ ํด๋|
|recoil|recoil๋ฅผ ํ์ฉํ ํด๋|
|styles|์ ์ญ์ผ๋ก ์ฌ์ฉํ๋ style ๊ด๋ฆฌ ํด๋|
|hooks|์ฌ์ฌ์ฉ๋๋ ์ปค์คํํ์ ์ ์ํ ํด๋|
|utils|์ฌ์ฌ์ฉ๋๋ ํจ์๋ค์ ์ ์ํ ํด๋|

<br/>

## ๊ณผ์ ๋ฒ์

- ๋ก๊ทธ์ธ
- Header
- Footer
- Sider
- Content
    - ๊ณ์ข ๋ชฉ๋ก
    - ๊ณ์ข ์์ธ
    - ์ฌ์ฉ์ ๋ชฉ๋ก
    - ์ฌ์ฉ์ ์์ธ
2. ๋ ์ด์์ ๊ตฌ์ฑ
    
    ![https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png](https://user-images.githubusercontent.com/1831308/184299776-53e7c423-73d4-4b7e-9fcf-acaab20ece1a.png)
    
    | ์ด๋ฆ | ์ค๋ช |
    | --- | --- |
    | Header | ํ์ฌ ๋ณด์ฌ์ง๊ณ  ์๋ ํ์ด์ง๋ช๊ณผ ๋ก๊ทธ์ธ ์ฌ์ฉ์๋ช์ ๋ณด์ฌ์ค๋๋ค. |
    | Sider | ํ์ด์ง ๋ฉ๋ด๊ฐ ํ์๋ฉ๋๋ค. |
    | Footer | Copyright ยฉ December and Company Inc. ๊ฐ ๊ฐ์ด๋ฐ ์ ๋ ฌ๋ก ๋ค์ด๊ฐ๋ฉด ๋ฉ๋๋ค. |
3. ๋ฉ๋ด ๊ตฌ์ฑ
    
    
    | ์ด๋ฆ | ์ค๋ช |
    | --- | --- |
    | ๊ณ์ข ๋ชฉ๋ก | ๊ณ์ข ๋ชฉ๋ก์ด ๋ณด์ฌ์ง๋๋ค. |
    |  | ๊ณ์ข ๋ชฉ๋ก์์ ํน์  ๊ณ์ข๋ฅผ ๋๋ฅด๋ฉด ๊ณ์ข์ ์์ธ ์ ๋ณด๊ฐ ๋ณด์ฌ์ง๋๋ค. ์ด ํ๋ฉด์์๋ ๊ณ์ข๋ช ์์  ๋ฑ์ ์์์ด ๊ฐ๋ฅํด์ผ ํฉ๋๋ค. ๊ณ์ข์ ์ฌ์ฉ์๋ช์ ๋๋ฅด๋ฉด ์ฌ์ฉ์ ์์ธ๋ก ์ด๋ํฉ๋๋ค. |
    | ์ฌ์ฉ์ | ์ฌ์ฉ์ ๋ชฉ๋ก์ด ๋ณด์ฌ์ง๋๋ค. |
    |  | ์ฌ์ฉ์ ๋ชฉ๋ก์์ ์ฌ์ฉ์๋ฅผ ๋๋ฅด๋ฉด ์ฌ์ฉ์์ ์์ธ ์ ๋ณด๊ฐ ๋ณด์ฌ์ง๋๋ค. |
    | ๋ก๊ทธ์์ | ๋ก๊ทธ์์ ์ฒ๋ฆฌ๋๊ณ  ๋ก๊ทธ์ธ ํ๋ฉด์ผ๋ก ์ด๋ํฉ๋๋ค. |
4. ์ฌ์ฉ์ ๋ชฉ๋ก
    - ํ๊ธฐ๋์ด์ผ ํ๋ ์ ๋ณด
        - ๊ณ ๊ฐ๋ช(name) : ๊ฐ์ด๋ฐ ๊ธ์ ๋ง์คํน ํ์, ๋๊ธ์์ผ ๊ฒฝ์ฐ ์ฑ์ ์ ์ธํ ์ด๋ฆ ๋ง์คํน ์ฒ๋ฆฌ, 4๊ธ์ ์ด์์ผ ๊ฒฝ์ฐ ๋ง์คํน ์ฒ๋ฆฌ ํ ์๋ค ํ๊ธ์๋ง ํ๊ธฐ
            - ๊ณ ๊ฐ๋ช์ ๋๋ฅผ ๊ฒฝ์ฐ ์ฌ์ฉ์ ์์ธํ๋ฉด์ผ๋ก ์ด๋ํฉ๋๋ค.
        - ๋ณด์ ์ค์ธ ๊ณ์ข์(account_count) : (ํด๋น API ํธ์ถ ํ ๋ฐ์ดํฐ๋ฅผ ์ ์ ํ์ฌ ํ๊ธฐ)
        - ์ด๋ฉ์ผ ์ฃผ์ (email)
        - ์ฃผ๋ฏผ๋ฑ๋ก์ ์ฑ๋ณ์ฝ๋ (gender_origin)
        - ์๋์์ผ (yyyy-mm-dd) (birth_date)
        - ํด๋ํฐ ๋ฒํธ (๊ฐ์ด๋ฐ 4์๋ฆฌ `***` ๋ก ๋ง์คํน ํ์) (phone_number)
        - ์ต๊ทผ๋ก๊ทธ์ธ (last_login)
        - ํํ ์์  ๋์ ์ฌ๋ถ (ํด๋น API ํธ์ถ ํ ๋ฐ์ดํฐ๋ฅผ ์ ์ ํ์ฌ ํ๊ธฐ) (allow_marketing_push)
        - ํ์ฑํ ์ฌ๋ถ (ํด๋น API ํธ์ถ ํ ๋ฐ์ดํฐ๋ฅผ ์ ์ ํ์ฌ ํ๊ธฐ) (is_active)
        - ๊ฐ์์ผ (created_at)
    - ๊ตฌํ๋์ด์ผ ํ๋ ๊ธฐ๋ฅ
        - ๋ชฉ๋ก์์๋ ํ์ฑํ ์ฌ๋ถ, ์์ง์ ๊ณ์ข ์ฌ๋ถ๋ฅผ ํํฐ๋ง ํ  ์ ์์ด์ผ ํฉ๋๋ค.
        - ๋ฆฌ์คํธ ํ์ด์ง์์๋ ๊ฒ์์ด ๊ฐ๋ฅํด์ผ ํฉ๋๋ค.
            - `json-server` ์ Full-text Search API ๋ฅผ ์ฌ์ฉํ์ฌ ๊ตฌํํฉ๋๋ค.
            - ์์ : GET [http://localhost:3000/users?q=South](http://localhost:3000/users?q=South)
        - ํ์ด์ง๋ค์ด์์ด ๋์ด์ผ ํฉ๋๋ค.
            - `json-server` ์ Paginate API ๋ฅผ ์ฌ์ฉํ์ฌ ๊ตฌํํฉ๋๋ค.
            - ์์ : GET [http://localhost:3000/users?\\_page=1&\\_limit=20](http://localhost:3000/users?%5C%5C_page=1&%5C%5C_limit=20)
        - ์์๋ก ์ ๊ท ์ฌ์ฉ์๋ฅผ ์ถ๊ฐํ  ์ ์์ด์ผ ํฉ๋๋ค.
        - ์๋ชป ์์ฑํ ์ฌ์ฉ์๋ฅผ ์ญ์ ํ  ์ ์์ด์ผ ํฉ๋๋ค.
        - ๊ฐ๋ช์ ํ ์ฌ์ฉ์๋ฅผ ์ํด ์ฌ์ฉ์๋ช์ ๋ณ๊ฒฝํ  ์ ์์ด์ผ ํฉ๋๋ค.
5. ๊ณ์ข ๋ชฉ๋ก
    - ํ๊ธฐ๋์ด์ผ ํ๋ ์ ๋ณด
        - ๊ณ ๊ฐ๋ช(user_name) : ๊ณ ๊ฐID ๋ฅผ ์ฐธ์กฐํ์ฌ ์ค์  ์ด๋ฆ์ผ๋ก ๋ณด์ฌ์ ธ์ผ ํฉ๋๋ค.
            - ๊ณ ๊ฐ๋ช์ ๋๋ฅผ ๊ฒฝ์ฐ ์ฌ์ฉ์ ์์ธํ๋ฉด์ผ๋ก ์ด๋ํฉ๋๋ค.
        - ๋ธ๋ก์ปค๋ช(broker_name) : ์์) OO์ฆ๊ถ, `brokers.json` ๋ฅผ ์ฐธ์กฐํ์ฌ ์ค์  ์ด๋ฆ์ผ๋ก ๋ณด์ฌ์ ธ์ผ ํฉ๋๋ค.
        - ๊ณ์ข๋ฒํธ(number) : ์ ๋ค ๊ฐ๊ฐ ๋๊ธ์๋ฅผ ์ ์ธํ๊ณ  ๋๋จธ์ง๋ ๊ธ์์์ ๋ง๊ฒ `*` ๊ธ์๋ก ๋ง์คํน ์ฒ๋ฆฌ๊ฐ ํ์ํฉ๋๋ค.
        - ๊ณ์ข์ํ(status) : ์์) ์ด์ฉ์ค, `accountStatus.json` ๋ฅผ ์ฐธ์กฐํ์ฌ ์ค์  ์ด๋ฆ์ผ๋ก ๋ณด์ฌ์ ธ์ผ ํฉ๋๋ค.
        - ๊ณ์ข๋ช(name) : ๊ณ์ข๋ช์๋๋ค.
        - ํ๊ฐ๊ธ์ก(assets) : ์์) 123,123,123
        - ์๊ธ๊ธ์ก(payments) : ์์) 123,123,123
        - ๊ณ์ขํ์ฑํ์ฌ๋ถ(is_active) : ๊ณ์ข ํ์ฑํ ์ฌ๋ถ
        - ๊ณ์ข๊ฐ์ค์ผ(created_at) :
    - ๊ตฌํ๋์ด์ผ ํ๋ ๊ธฐ๋ฅ
        - ๋ชฉ๋ก์์๋ ๋ธ๋ก์ปค๋ช, ๊ณ์ข ํ์ฑํ ์ฌ๋ถ, ๊ณ์ข ์ํ๋ฅผ ํํฐ๋ง ํ  ์ ์์ด์ผ ํฉ๋๋ค.
        - ๋ฆฌ์คํธ ํ์ด์ง์์๋ ๊ฒ์์ด ๊ฐ๋ฅํด์ผ ํฉ๋๋ค.
            - `json-server` ์ Full-text Search API ๋ฅผ ์ฌ์ฉํ์ฌ ๊ตฌํํฉ๋๋ค.
            - ์์ : GET [http://localhost:3000/accounts?q=South](http://localhost:3000/accounts?q=South)
        - ํ์ด์ง๋ค์ด์์ด ๋์ด์ผ ํฉ๋๋ค.
            - `json-server` ์ Paginate API ๋ฅผ ์ฌ์ฉํ์ฌ ๊ตฌํํฉ๋๋ค.
            - ์์ : GET [http://localhost:3000/accounts?_page=2&_limit=20](http://localhost:3000/accounts?%5C%5C_page=2&%5C%5C_limit=20)
6. ์์ธ
    - ๊ฐ ์ฌ์ฉ์, ๊ณ์ข์ ์์ธ ํ์ด์ง๋ ํ๋ ๊ฐ๋ฅํ ๋๋ถ๋ถ์ ์ ๋ณด๋ฅผ ํ์ํด์ฃผ์๋ฉด ๋ฉ๋๋ค.
7. ์กฐ๊ฑด
    - Sider ๋ฉ๋ด์์๋ ํ์ฌ ๋ณด๊ณ  ์๋ ํ๋ฉด์ ํด๋นํ๋ ๋ฉ๋ด๊ฐ ํ์ด๋ผ์ดํธ ๋์ด์ผ ํฉ๋๋ค.
    - ์๋ก๊ณ ์นจ์ ํด๋ ๋ก๊ทธ์ธ ์ํ๊ฐ ์ ์ง๋์ด์ผ ํ๋ฉฐ, ์ํ์ ๋ฐ๋ผ ๊ธฐ์กด์ ๋จธ๋ฌด๋ฅด๋ ํ๋ฉด์ด ๊ทธ๋๋ก ๋ณด์ฌ์ผ ํฉ๋๋ค.
    - ๊ณ์ข ๋ฆฌ์คํธ์์ ๊ณ์ข๋ฒํธ๋ฅผ ๋๋ฅด๋ฉด ๊ณ์ข์์ธ ํ๋ฉด์ผ๋ก ์ด๋ํฉ๋๋ค.
    - ๊ณ์ข ๋ฆฌ์คํธ์์ ์ฌ์ฉ์ ์ด๋ฆ์ ๋๋ฅด๋ฉด ์ฌ์ฉ์ ์์ธ๋ก ์ด๋ํฉ๋๋ค.
    - ์ฌ์ฉ์ ์์ธ์์ ์ฌ์ฉ์์ ๊ณ์ข๋ชฉ๋ก์ด ๋ณด์ฌ์ผ ํฉ๋๋ค.
    - ๊ณ์ข ๋ชฉ๋ก์์ ๊ฐ ๊ณ์ข ์ํ๋ณ๋ก ํํฐ๋ง์ด ๊ฐ๋ฅํด์ผ ํฉ๋๋ค.
    - ์์ต๋ฅ ์ด ํ๋ฌ์ค์ธ ๊ณ์ข์ ์ด์์ฐ ๊ธ์ก์ ๋นจ๊ฐ์, ์๊ธ๊ณผ ๋์ผํ ๊ฒฝ์ฐ ๊ฒ์ ์, ๋ง์ด๋์ค์ผ ๊ฒฝ์ฐ ํ๋์์ผ๋ก ๋ณด์ฌ์ค์ผ ํฉ๋๋ค.
    - ๊ณ์ข ๋ชฉ๋ก์์ broker_id ์ ํด๋นํ๋ ์ค์  ๋ธ๋ก์ปค๋ช (OOํฌ์์ฆ๊ถ) ์ด ๋ณด์ฌ์ผ ํฉ๋๋ค.
8. ์์
    
    > ์ด ํ๋ฉด์ ์์๋ก ์์ฑํ ํ์คํธ ๋ฐ์ดํฐ๋ก ๋ณด์ฌ์ง๋ ๋จ์ ์์ ํ๋ฉด์ผ๋ก, ์ค์ ์๋ ๋ฌด๊ดํฉ๋๋ค. 
    ์์๋ก ๋ง๋  ํ๋ฉด์ด๋ฉฐ, ๋์์ธ ๊ฐ์ด๋๊ฐ ์๋๋๋ค. ํ์๋ง ์ฐธ๊ณ ํ์ฌ ๊ฐ๋ฐ์ ์งํํด์ฃผ์ธ์.
    > 
    - ๋ก๊ทธ์ธ ํ๋ฉด
        
        ![https://user-images.githubusercontent.com/1831308/184299811-8ec25452-21bc-4466-96fb-8d72f9de5acd.png](https://user-images.githubusercontent.com/1831308/184299811-8ec25452-21bc-4466-96fb-8d72f9de5acd.png)
        
    - ๋ฆฌ์คํธ ํ๋ฉด
        
        ![https://user-images.githubusercontent.com/1831308/184299994-2f2d402d-2056-4876-83ed-809cc9c067df.png](https://user-images.githubusercontent.com/1831308/184299994-2f2d402d-2056-4876-83ed-809cc9c067df.png)
        
    - ์์ธ ํ๋ฉด
        
        ![https://user-images.githubusercontent.com/1831308/184299853-e586103b-131a-4950-be92-feabe7d973ab.png](https://user-images.githubusercontent.com/1831308/184299853-e586103b-131a-4950-be92-feabe7d973ab.png)
        
9. ์ถ๊ฐ ๊ตฌํ ์ฌํญ
    - `brokerFormat.json` ์ ํ์์ ๋ง์ถ ๊ณ์ข๋ฒํธ๊ฐ ํ๊ธฐ (์: 123-123-123123-10)
    - ์ํฉ๋ณ ์์ธ์ฒ๋ฆฌ
<br />

## ๊ธฐ์  ์คํ

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)  
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)  
![Recoil](https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white)  
![axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)  
![Ant-Design](https://img.shields.io/badge/-AntDesign-%230170FE?style=for-the-badge&logo=ant-design&logoColor=white)  


<br />

## Best Practice

### 1. authenticated๋ฅผ routes ๋ด์์ ์ฒ๋ฆฌํ์ต๋๋ค.  

๐ก ์ด์  : page๋ด์์ authenticated๋ฅผ ์ฒ๋ฆฌํ๋ฉด ํ์ด์ง๋ง๋ค ์ฒ๋ฆฌํด์ผํ๋ ๋ฒ๊ฑฐ๋ก์ + ํ์ด์ง ๊น๋นก์ด๋ ํ์์ด ๋ฐ์ํ์ง๋ง, routes ๋ด์์ ์ง์  ์ฒ๋ฆฌํจ์ผ๋ก์จ ํด๊ฒฐํ์ต๋๋ค.

### 2. ์ด๋๋ฏผ ํ์ด์ง์์ ๋์ผํ layout์ Routes ํ์ผ์ ์ ์ฉํ์ต๋๋ค.

๐ก ์ด์  : ์ต๋ํ ์ฝ๋ ์์ ์ค์ด๊ธฐ ์ํด์ ์ด๋ฉฐ, ์ฝ๋๊ฐ ๋ง์์ง๋ฉด ๋น๋ ์๋ ๋ฐ ๋ ๋๋ง ์๋๊ฐ ์ ํ๋๊ธฐ ๋๋ฌธ์๋๋ค. ๋ํ, import์ ๋น๋๋ ์ค์ผ์ ์์ต๋๋ค.

### 3. ๋ง์ ์ปดํฌ๋ํธ, ์ฝ๋๋ฅผ export ํด์ ๊ด๋ฆฌํด์ผ ํ๋ ๊ฒฝ์ฐ index.js ํ์ผ์ ๋ง๋ค์ด import ๊ฒฝ๋ก๋ฅผ ์ค์์ต๋๋ค.  

๐ก ์ด์  : import ๊ฒฝ๋ก๊ฐ ๊ธธ์ด์ง๋ฉด ๊ฐ๋์ฑ์ด ๋จ์ด์ง๊ณ , ํ์ผ ์ถ์ ์ด ๋ถํธํ๋ค๋ ๋จ์ ์ด ์๊ธฐ๋๋ฌธ์๋๋ค. ์ด๋ฅผ ์ค์ด๊ธฐ ์ํด ๊ฐ root ํด๋์ index.js ํ์ผ์ ๋ง๋ค์ด export default ํธ๋ค๋ง์ ํ์ต๋๋ค.

### 4. ์ฌ์ฌ์ฉ ๋๋ ํจ์, hooks๋ค์ ์ ์ํด์ ์ฌ์ฉํ์ต๋๋ค.

๐ก ์ด์  : ๋ชจ๋  ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ค๋ ๋ก์ง์ด๋ ํ๋๊ฐ์ ๊ฐ์ ธ์ค๋ ํจ์๋ค์ ์ฌ์ฌ์ฉ๋๊ธฐ ๋๋ฌธ์, ์ ์ํด์ exportํ ์ฌ๋ฌํ์ด์ง์์ ์ฌ์ฌ์ฉํด ์ฝ๋์์ ์ค์์ต๋๋ค.

### 5. recoil๊ณผ react-query๋ก ์ํ๊ด๋ฆฌ๋ฅผ ํ์ต๋๋ค.

๐ก ์ด์  : ์๋ฒ ๋ฐ์ดํฐ ์ํ ๊ด๋ฆฌ์ ํด๋ผ์ด์ธํธ ๋ฐ์ดํฐ ์ํ ๊ด๋ฆฌ๋ฅผ ๋ถ๋ฆฌํ๊ธฐ ์ํด, ์๋ฒ ๋ฐ์ดํฐ๊ด๋ฆฌ๋ react-query๋ฅผ, ํด๋ผ์ด์ธํธ ๋ฐ์ดํฐ๊ด๋ฆฌ๋ recoil์ ์ฌ์ฉํ์ต๋๋ค.

### 6. params๋ก ํ์ด์ง๋ค์ด์, ๊ฒ์์ ๊ด๋ฆฌํด์ ์ธ์ ๋  ๋๋ฉ์ธ์ ์ ๊ทผ ๊ฐ๋ฅํ๊ฒ ํ์ต๋๋ค.

๐ก ์ด์  : ํน์  ํ์ด์ง์ ๋งํฌ๋ฅผ ํตํด์๋ ์ ๊ทผํ  ์ ์๊ณ , Query String์ผ๋ก ์ ๋ณด๋ฅผ ์ป์ด ์ฌ์ฉํ  ์๋ ์๊ธฐ ๋๋ฌธ์๋๋ค.

### 7. Tailwind CSS๋ฅผ ์ฌ์ฉํด์ CSS ์ ์ฉ์ ํ์์ต๋๋ค.

๐ก ์ด์  : ํด๋์ค๋ช์ผ๋ก ์ ์ธ์ ํจ์ผ๋ก์จ ๊ฐํธํ๊ฒ ์ฌ์ฉ์ด ๊ฐ๋ฅํ๋ฉฐ, HTML์ CSS ํ์ผ์ ๋ณ๋๋ก ๊ด๋ฆฌํ  ํ์๊ฐ ์์ต๋๋ค. ๋ํ, ์ผ๊ด๋ ๋์์ธ๊ณผ ์คํ์ผ๊ณผ ์ฝ๊ณ  ์์ ๋ก์ด ์ปค์คํ์ด ๊ฐ๋ฅํฉ๋๋ค. ์ถ๊ฐ์ ์ผ๋ก Visual Studio Code์ ํ์ฅ ํ๋ก๊ทธ๋จ์ผ๋ก Tailwind CSS IntelliSense๋ฅผ ์ค์นํ๋ฉด, ํด๋์ค ์๋์์ฑ ๊ธฐ๋ฅ๋ ์ฌ์ฉํ  ์ ์์ต๋๋ค.


