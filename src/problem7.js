function problem7(user, friends, visitors) {
  var answer;

  isUser = except(user, friends);
  console.log(isUser);

  return answer;
}

function except(user, friends){
  let userfriend = [];

  //friends에 user인 mrko가 있는지 없는지 판단
  for(i = 0; i < friends.length; i++){  //바깥쪽 배열의 길이(friends.length)
    for(j = 0; j < 2; j++){ //안쪽 배열의 길이(2)
      //있으면 다른 한명의 이름을 가져옴
      if(friends[i][j] == user){
        if(j==0){
          userfriend.push(friends[i][1]);
        }
        else{
          userfriend.push(friends[i][0]);
        }
      }
    }
  }
  return userfriend;


  //mrko의 친구의 친구 탐색한 후, 10점 부여
  //방문자 명단에서 mrko와 mrko 친구 제외하고 1점씩 부여
  //점수와 이름을 오름차순으로 정렬
}

module.exports = problem7;
