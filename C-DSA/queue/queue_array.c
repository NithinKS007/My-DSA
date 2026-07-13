#include <stdio.h>

#define MAX_QUEUE_SIZE 50

struct Queue
{
    int element[MAX_QUEUE_SIZE];
    int front;
    int rear;
};

void enqueue(struct Queue *q, int item);
int dequeue(struct Queue *q);

int main()
{
    struct Queue q;
    int choice, x;

    q.front = 0;
    q.rear = -1;

    printf("Enter 1 for Enqueue and 2 for Dequeue\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);

    switch (choice)
    {
    case 1:
        printf("Enter element to be added: ");
        scanf("%d", &x);
        enqueue(&q, x);
        break;

    case 2:
        x = dequeue(&q);

        if (x != -1)
            printf("Deleted element: %d\n", x);

        break;

    default:
        printf("Invalid choice\n");
        break;
    }

    return 0;
}

void enqueue(struct Queue *q, int item)
{
    if (q->rear == MAX_QUEUE_SIZE - 1)
    {
        printf("Queue Overflow\n");
        return;
    }

    q->rear++;
    q->element[q->rear] = item;
}

int dequeue(struct Queue *q)
{
    int item;

    if (q->front > q->rear)
    {
        printf("Queue Underflow\n");
        return -1;
    }

    item = q->element[q->front];
    q->front++;

    return item;
}