class Matrix{
    constructor(rows, columns){
        this.rows = rows;
        this.columns = columns;
        this.data = [];
        for(var i = 0; i < rows; i++){
            this.data.push(new Array(columns));
            for(var j = 0; j < columns; j++){
                this.data[i][j] = random(-1, 1);
            }
        }
    }
    static Mult(matrix1, matrix2){
        if(matrix2.rows != matrix1.columns){
            return -1;
        }
        let prod = new Matrix(matrix1.rows, matrix2.columns);
        var sum = 0;
        for(var i = 0; i < matrix1.rows; i++){
            for(var j = 0; j < matrix2.columns; j++){
                sum = 0;
                for(var k = 0; k < matrix1.columns; k++){
                    sum += matrix1.data[i][k] * matrix2.data[k][j];
                }
                prod.data[i][j] = sum;
            }
        }
        return prod;
    }

    static Add(matrix1, matrix2){
        if(matrix1.rows != matrix2.rows || matrix1.columns != matrix2.columns){
            console.error("Dimension Mismatch!!, Cannot add");
        }
        var sum = new Matrix(matrix1.rows, matrix1.columns);
        for(var i = 0; i < matrix1.rows; i++){
            for(var j = 0; j < matrix2.columns; j++){
                sum.data[i][j] = matrix1.data[i][j] + matrix2.data[i][j];
            }
        }
        return sum;
    }
    
    static to1DMatrix(arr){
        var mat = new Matrix(arr.length, 1);
        for(var i = 0; i < arr.length; i++){
            mat.data[i][0] = arr[i];
        }
        return mat;
    }
    toArray(){
        var arr = this.data;
        return arr;
    }
}