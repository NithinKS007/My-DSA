#include <stdio.h>

#define MAX 10

void enqueue(int value);
void dequeue(void);

int queue[MAX];
int front = 0;
int rear = -1;
int count = 0;

int main(void)
{
    int choice, value;

    while (1)
    {
        printf("\n1. Enqueue");
        printf("\n2. Dequeue");
        printf("\n3. Exit");
        printf("\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter the element to be added: ");
            scanf("%d", &value);
            enqueue(value);
            break;

        case 2:
            dequeue();
            break;

        case 3:
            return 0;

        default:
            printf("Invalid Choice\n");
        }
    }
}

void enqueue(int value)
{
    if (count == MAX)
    {
        printf("Queue Overflow\n");
        return;
    }

    rear = (rear + 1) % MAX;
    queue[rear] = value;
    count++;
}

void dequeue(void)
{
    int deletedElement;

    if (count == 0)
    {
        printf("Queue Underflow\n");
        return;
    }

    deletedElement = queue[front];
    printf("Deleted element: %d\n", deletedElement);

    front = (front + 1) % MAX;
    count--;
}