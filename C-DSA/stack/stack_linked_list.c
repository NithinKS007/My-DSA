#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
/* Definition of the structure node */
typedef struct node
{
    int data;
    struct node *next;
} node;

void push(node **tos, int item)
{
    node *temp;
    temp = (node *)malloc(sizeof(node));
    if (temp == NULL)
    {
        printf("\nError: Insufficient Memory Space");
        getch();
        return;
    }
    else
    {
        temp->data = item;

        temp->next = *tos;
        *tos = temp;
    }
}

int pop(node **tos)
{
    node *temp;
    temp = *tos;
    int item;
    if (*tos == NULL)
        return (NULL);
    else
    {
        *tos = (*tos)->next;
        item = temp->data;
        free(temp);
        return (item);
    }
}

void display(node *tos)
{
    node *temp = tos;
    if (temp == NULL)
    {
        printf("\nStack is empty");
        return;
    }
    else
    {
        while (temp != NULL)
        {
            printf("\n%d", temp->data);
            temp = temp->next;
        }
    }
}

int main()
{
    int item, ch;
    char choice = 'y';
    node *p = NULL;

    while (choice == 'y')
    {
        clrscr();

        printf("\t\t\t\t*****MENU*****");
        printf("\n\t\t\t1. To PUSH an element");
        printf("\n\t\t\t2. To POP an element");
        printf("\n\t\t\t3. To DISPLAY the elements of stack");
        printf("\n\t\t\t4. Exit");

        printf("\n\n\n\t\t\tEnter your choice: ");
        scanf("%d", &ch);

        switch (ch)
        {
        case 1:
            printf("\nEnter an element to push: ");
            scanf("%d", &item);
            push(&p, item);
            break;

        case 2:
            item = pop(&p);

            if (item != NULL)
                printf("\nDeleted item is %d", item);

            break;

        case 3:
            printf("\nThe elements of stack are:\n");
            display(p);
            break;

        case 4:
            exit(0);

        default:
            printf("\nInvalid Choice!");
        }

        printf("\n\nDo you want to run again (y/n): ");
        scanf(" %c", &choice);
    }

    return 0;
}