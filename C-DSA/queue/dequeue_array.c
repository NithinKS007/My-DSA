#include <stdio.h>

#define QUEUE_LENGTH 10

int dq[QUEUE_LENGTH];
int front, rear;

void add_front(int);
void add_rear(int);
int delete_front(void);
int delete_rear(void);

int main()
{
    int choice, x;

    front = rear = -1;

    printf("Enter 1 for addition at the front\n");
    printf("Enter 2 to remove element from the front\n");
    printf("Enter 3 for addition at the rear\n");
    printf("Enter 4 to remove element from the rear\n");

    printf("Enter your choice: ");
    scanf("%d", &choice);

    switch (choice)
    {
        case 1:
            printf("Enter element to be added: ");
            scanf("%d", &x);
            add_front(x);
            break;

        case 2:
            x = delete_front();
            if (x != -1)
                printf("Deleted element = %d\n", x);
            break;

        case 3:
            printf("Enter element to be added: ");
            scanf("%d", &x);
            add_rear(x);
            break;

        case 4:
            x = delete_rear();
            if (x != -1)
                printf("Deleted element = %d\n", x);
            break;

        default:
            printf("Invalid choice\n");
    }

    return 0;
}

void add_front(int y)
{
    if (front == -1)
    {
        front = rear = 0;
        dq[front] = y;
    }
    else if (front == 0)
    {
        printf("Element cannot be added at the front.\n");
    }
    else
    {
        front--;
        dq[front] = y;
    }
}

void add_rear(int y)
{
    if (front == -1)
    {
        front = rear = 0;
        dq[rear] = y;
    }
    else if (rear == QUEUE_LENGTH - 1)
    {
        printf("Element cannot be added at the rear.\n");
    }
    else
    {
        rear++;
        dq[rear] = y;
    }
}

int delete_front(void)
{
    int item;

    if (front == -1)
    {
        printf("Queue is empty.\n");
        return -1;
    }

    item = dq[front];

    if (front == rear)
    {
        front = rear = -1;
    }
    else
    {
        front++;
    }

    return item;
}

int delete_rear(void)
{
    int item;

    if (rear == -1)
    {
        printf("Queue is empty.\n");
        return -1;
    }

    item = dq[rear];

    if (front == rear)
    {
        front = rear = -1;
    }
    else
    {
        rear--;
    }

    return item;
}