module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  const result = [];

 // так как там идёт змейкой, проверим на четность и нечетность строк матрицы
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      // для четных строк обычный порядок
      result.push(...matrix[i]); 
    } else {
      // для нечетных строк переворот строки
      result.push(...matrix[i].reverse());
    }
  }

  return result;
};