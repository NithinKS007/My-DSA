/* The program accepts two polynomials as input and prints the resultant
   polynomial due to the addition of input polynomials */

#include <stdio.h>

void main()
{
    int poly1[6][2], poly2[6][2], term1, term2, match, proceed, i, j;

    printf("Enter the number of terms in the first polynomial. They should be less than 6:\n");
    scanf("%d", &term1);

    printf("Enter the number of terms in the second polynomial. They should be less than 6:\n");
    scanf("%d", &term2);

    printf("Enter the coefficient and exponent of each term of the first polynomial:\n");
    for (i = 0; i < term1; i++)
    {
        scanf("%d %d", &poly1[i][0], &poly1[i][1]);
    }

    printf("Enter the coefficient and exponent of each term of the second polynomial:\n");
    for (i = 0; i < term2; i++)
    {
        scanf("%d %d", &poly2[i][0], &poly2[i][1]);
    }

    printf("The resultant polynomial due to the addition of the input two polynomials:\n");

    for (i = 0; i < term1; i++)
    {
        match = 0;

        for (j = 0; j < term2; j++)
        {
            if (match == 0)
            {
                if (poly1[i][1] == poly2[j][1])
                {
                    printf("%d %d\n", (poly1[i][0] + poly2[j][0]), poly1[i][1]);
                    match = 1;
                }
            }
        }
    }

    for (i = 0; i < term1; i++)
    {
        proceed = 1;

        for (j = 0; j < term2; j++)
        {
            if (proceed == 1)
            {
                if (poly1[i][1] != poly2[j][1])
                    proceed = 1;
                else
                    proceed = 0;
            }
        }

        if (proceed == 1)
            printf("%d %d\n", poly1[i][0], poly1[i][1]);
    }

    for (i = 0; i < term2; i++)
    {
        proceed = 1;

        for (j = 0; j < term1; j++)
        {
            if (proceed == 1)
            {
                if (poly2[i][1] != poly1[j][1])
                    proceed = 1;
                else
                    proceed = 0;
            }
        }

        if (proceed == 1)
            printf("%d %d\n", poly2[i][0], poly2[i][1]);
    }
}

// Output:
// Enter the number of terms in the first polynomial.They should be less than 6 : 5.
// Enter the number of terms in the second polynomial.They should be less than 6 : 4.
// Enter the coefficient and exponent of each term of the first polynomial:
// 1 2
// 2 4
// 3 6 
// 1 8
// 5 7
// Enter the coefficient and exponent of each term of the second polynomial:
// 5 2
// 6 9
// 3 6
// 5 7
// The resultant polynomial due to the addition of the input two polynomials:
// 6 2
// 6 6
// 10 7
// 2 4
// 1 8
// 6 9 