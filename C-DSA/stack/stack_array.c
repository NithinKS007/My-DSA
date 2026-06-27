// Implimentation of array using stack
// LIFO = Last In, First Out

#include <stdio.h>
#define MAX 10

struct Stack
{
    int array[MAX];
    int top;
};

void menu(struct Stack *s);
void push(struct Stack *s);
void pop(struct Stack *s);
void show_elements(struct Stack *s);

int main()
{
    struct Stack s;

    s.top = 0;

    menu(&s);

    return 0;
}

void menu(struct Stack *s)
{
    int choice;

    while (1)
    {
        printf("\n===== STACK MENU =====\n");
        printf("1. PUSH\n");
        printf("2. POP\n");
        printf("3. SHOW ELEMENTS\n");
        printf("4. EXIT\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            push(s);
            break;

        case 2:
            pop(s);
            break;

        case 3:
            show_elements(s);
            break;

        case 4:
            printf("Exiting...\n");
            return;

        default:
            printf("Invalid Choice!\n");
        }
    }
}
void push(struct Stack *s)
{
    int element;

    if (s->top == MAX)
    {
        printf("Stack Overflow!\n");
        return;
    }

    printf("Enter element: ");
    scanf("%d", &element);

    s->array[s->top] = element;
    s->top++;
}

void pop(struct Stack *s)
{
    if (s->top == 0)
    {
        printf("Stack Underflow!\n");
        return;
    }

    s->top--;

    printf("Popped Element: %d\n", s->array[s->top]);
}

void show_elements(struct Stack *s)
{
    if (s->top == 0)
    {
        printf("Stack is Empty!\n");
        return;
    }

    printf("\nStack Elements:\n");

    for (int i = s->top - 1; i >= 0; i--)
    {
        printf("%d\n", s->array[i]);
    }
}
