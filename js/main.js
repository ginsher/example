//아이디가 circle인 요소를 찾아서 저장
const circle = document.querySelector("#circle");
//아이디가 article인 요소를 찾아서 저장
const article = document.querySelectorAll("article");

//article의 전체 개수만큼 반복하면서 mouseenter, mouseleave 이벤트 연결
for(let el of article){
    //article에 마우스 포인터를 올리면 부모인 #circle의 animation-play-state값을 "paused"로 변경
    el.addEventListener("mouseenter", e=>{
        circle.style.animationPlayState = "paused";
    });

    //article에서 마우스가 떠나면 리면 부모인 #circle의 animation-play-state값을 다시 "running"로 변경
    el.addEventListener("mouseleave", e=>{
        circle.style.animationPlayState = "running";
    });
}
