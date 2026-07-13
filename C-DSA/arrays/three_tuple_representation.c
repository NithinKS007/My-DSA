/* The program accepts a matrix as input and prints the 3-tuple representation
   of it */

#include <stdio.h>

void main()
{
    int a[5][5], rows, columns, i, j;

    printf("Enter the order of the matrix. The order should be less than 5 x 5:\n");
    scanf("%d %d", &rows, &columns);

    printf("Enter the elements of the matrix:\n");

    for (i = 0; i < rows; i++)
        for (j = 0; j < columns; j++)
        {
            scanf("%d", &a[i][j]);
        }

    printf("The 3-tuple representation of the matrix is:\n");

    for (i = 0; i < rows; i++)
        for (j = 0; j < columns; j++)
        {
            if (a[i][j] != 0)
            {
                printf("%d %d %d\n", (i + 1), (j + 1), a[i][j]);
            }
        }
}

// Output:
// enter the order of the matrix. The order should be less than 5 × 5:
// 3 3
// Enter the elements of the matrix:
// 1 2 3
// 0 1 0
// 0 0 4
// The 3-tuple representation of the matrix is:
// 1 1 1
// 1 2 2
// 1 3 3
// 2 2 1
// 3 3 4 