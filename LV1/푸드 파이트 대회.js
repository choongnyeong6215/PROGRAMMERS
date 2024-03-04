function solution(food) {
  const foodDeployment = [];

  for (let i = 0; i < food.length; i++) {
    foodDeployment.push(i.toString().repeat(Math.floor(food[i] / 2)));
  }

  return foodDeployment.join("") + "0" + [...foodDeployment].reverse().join("");
}
