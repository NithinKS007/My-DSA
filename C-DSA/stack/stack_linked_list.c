#include <stdio.h>
#include <stdlib.h>
/* Definition of the structure node */
typedef struct Node
{
    int data;
    struct Node *next;
} Node;

void push(Node **top, int item)
{
    Node *temp = malloc(sizeof(Node));
    if (temp == NULL)
    {
        printf("\nError: Insufficient Memory Space");
        return;
    }

    temp->data = item;
    temp->next = *top;
    *top = temp;
    printf("\n%d pushed successfully.\n", item);
}

int pop(Node **top)
{
    Node *temp;
    temp = *top;
    int item;
    if (*top == NULL)
    {
        return -1;
    }

    *top = (*top)->next;
    item = temp->data;
    free(temp);
    return (item);
}

void display(Node *top)
{
    Node *temp = top;
    if (temp == NULL)
    {
        printf("\nStack is empty");
        return;
    }

    while (temp != NULL)
    {
        printf("\n%d", temp->data);
        temp = temp->next;
    }
}

int main()
{
    int item, ch;
    char choice = 'y';
    Node *top = NULL;

    while (choice == 'y')
    {

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
            push(&top, item);
            break;

        case 2:
            item = pop(&top);

            if (item != NULL)
                printf("\nDeleted item is %d", item);

            break;

        case 3:
            printf("\nThe elements of stack are:\n");
            display(top);
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