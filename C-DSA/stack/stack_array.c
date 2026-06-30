// Implimentation of array using stack
// LIFO = Last In, First Out

#include <stdio.h>
#define MAX 10

struct Stack
{
    int array[MAX];
    int top;
};
struct Stack st;

void menu(struct Stack *st);
void push(struct Stack *st);
void pop(struct Stack *st);
void show_elements(struct Stack *st);

int main()
{

    st.top = 0;

    menu(&st);

    return 0;
}

void menu(struct Stack *st)
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
            push(st);
            break;

        case 2:
            pop(st);
            break;

        case 3:
            show_elements(st);
            break;

        case 4:
            printf("Exiting...\n");
            return;

        default:
            printf("Invalid Choice!\n");
        }
    }
}
void push(struct Stack *st)
{
    int element;

    if (st->top >= MAX)
    {
        printf("Stack Overflow!\n");
        return;
    }

    printf("Enter element: ");
    scanf("%d", &element);

    st->array[st->top] = element;
    st->top++;
}

void pop(struct Stack *st)
{
    if (st->top == 0)
    {
        printf("Stack Underflow!\n");
        return;
    }

    st->top--;

    printf("Popped Element: %d\n", st->array[st->top]);
}

void show_elements(struct Stack *st)
{
    if (st->top == 0)
    {
        printf("Stack is Empty!\n");
        return;
    }

    printf("\nStack Elements:\n");

    for (int i = st->top - 1; i >= 0; i--)
    {
        printf("%d\n", st->array[i]);
    }
}
