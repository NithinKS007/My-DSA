// Implimentation of array using stack

#include <stdio.h>

int choice;
int stack[10];
int top = 0;
int element;

void menu();
void push();
void pop();
void show_elements();

int main()
{
    menu();
    return 0;
}

void menu()
{
    while (1)
    {
        printf("\nEnter one of the following options:\n");
        printf("1. PUSH\n");
        printf("2. POP\n");
        printf("3. SHOW ELEMENTS\n");
        printf("4. EXIT\n");

        scanf("%d", &choice);

        if (choice == 1)
        {
            push();
        }
        else if (choice == 2)
        {
            pop();
        }
        else if (choice == 3)
        {
            show_elements();
        }
        else if (choice == 4)
        {
            printf("Exiting...\n");
            break;
        }
        else
        {
            printf("Invalid Choice!\n");
        }
    }
}

void push()
{
    if (top < 10)
    {
        printf("Enter the element to be pushed to stack:\n");
        scanf("%d", &element);
        stack[top] = element;
        top++;
    }
    else
    {
        printf("Stack is full\n");
    }
    return;
}

void pop()
{
    if (top > 0)
    {
        top--;
        element = stack[top];
        printf("Popped element:%d\n", element);
    }
    else
    {
        printf("Stack is empty\n");
    }
    return;
}

void show_elements()
{
    if (top == 0)
    {
        printf("Stack is Empty.\n");
    }
    else
    {
        printf("Stack Elements:\n");

        for (int i = 0; i < top; i++)
        {
            printf("%d\n", stack[i]);
        }
    }
}
