#include <stdio.h>
#include <malloc.h>
struct link
{
    char sign;
    int coef;
    int expo;
    struct link *next;
};
typedef struct link poly;
void insertion(poly *);
void create_poly(poly *);
void display(poly *);
/* Function create a ploynomial list */
void create_poly(poly *start)
{
    char ch;
    static int i;
    printf("\n Input choice n for break: ");
    ch = getchar();
    if (ch != 'n')
    {
        printf("\n Input the sign: %d: ", i + 1);
        scanf("%c", &start->sign);
        printf("\n Input the coefficient value: %d: ", i + 1);
        scanf("%d", &start->coef);
        printf("\n Input the exponent value: %d: ", i + 1);
        scanf("%d", &start->expo);
        fflush(stdin);
        i++;
        start->next = (poly *)malloc(sizeof(poly));
        create_poly(start->next);
    }
    else
        start->next = NULL;
}

void display(poly *start)
{
    if (start->next != NULL)
    {
        printf(" %c", start->sign);
        printf(" %d", start->coef);
        printf("X^%d", start->expo);
        display(start->next);
    }
}

int count_poly(poly *start)
{
    if (start->next == NULL)
        return 0;
    else
        return (1 + count_poly(start->next));
}

void main()
{
    poly *head = (poly *)malloc(sizeof(poly));
    create_poly(head);
    printf("\n Total nodes = %d \n", count_poly(head));
    display(head);
}