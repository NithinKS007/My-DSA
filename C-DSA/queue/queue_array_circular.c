#include <stdio.h>

#define MAX 10

void add(int);
void deleteelement(void);

int queue[MAX];
int front = -1, rear = -1;

int main()
{
    int choice, x;

    while (1)
    {
        printf("\n1. Add Element\n");
        printf("2. Delete Element\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter the element to be added: ");
            scanf("%d", &x);
            add(x);
            break;

        case 2:
            deleteelement();
            break;

        case 3:
            return 0;

        default:
            printf("Invalid choice!\n");
        }
    }
}

void add(int y)
{
    /* Queue Full */
    if ((front == 0 && rear == MAX - 1) ||
        (front == rear + 1))
    {
        printf("Queue Overflow\n");
        return;
    }

    /* First Element */
    if (front == -1)
    {
        front = rear = 0;
    }
    else if (rear == MAX - 1)
    {
        rear = 0;
    }
    else
    {
        rear++;
    }

    queue[rear] = y;
    printf("%d inserted successfully.\n", y);
}

void deleteelement()
{
    int deleted_front;

    /* Queue Empty */
    if (front == -1)
    {
        printf("Queue Underflow (Queue Empty)\n");
        return;
    }

    deleted_front = queue[front];
    printf("Deleted element: %d\n", deleted_front);

    /* Last Element */
    if (front == rear)
    {
        front = rear = -1;
    }
    else if (front == MAX - 1)
    {
        front = 0;
    }
    else
    {
        front++;
    }
}