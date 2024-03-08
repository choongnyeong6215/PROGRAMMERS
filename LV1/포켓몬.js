function solution(nums) {
  const set = new Set(nums);
  const choice = nums.length / 2;

  return set.size > choice ? choice : set.size;
}
