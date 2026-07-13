#include <stdio.h>
#include <stdlib.h>

/* Definition of Queue Node */
typedef struct QueueNode
{
    int value;
    struct QueueNode *next;
} QueueNode;

/* Definition of Circular Queue */
typedef struct
{
    QueueNode *front;
    QueueNode *rear;
} Queue;

/* Function Prototypes */
int isEmpty(const Queue *queue);
void enqueue(Queue *queue, int value);
int dequeue(Queue *queue);
void displayQueue(const Queue *queue);

int main(void)
{
    Queue queue;
    int choice, value;

    queue.front = NULL;
    queue.rear = NULL;

    while (1)
    {
        printf("\n========== CIRCULAR QUEUE ==========\n");
        printf("1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter value: ");
            scanf("%d", &value);
            enqueue(&queue, value);
            break;

        case 2:
            value = dequeue(&queue);

            if (value != -1)
                printf("Deleted element: %d\n", value);

            break;

        case 3:
            displayQueue(&queue);
            break;

        case 4:
            printf("Program terminated.\n");
            return 0;

        default:
            printf("Invalid choice.\n");
        }
    }
}


/* Check whether Queue is Empty */
int isEmpty(const Queue *queue)
{
    return queue->front == NULL;
}

/* Insert an element */
void enqueue(Queue *queue, int value)
{
    QueueNode *newNode = (QueueNode *)malloc(sizeof(QueueNode));

    if (newNode == NULL)
    {
        printf("Memory allocation failed.\n");
        return;
    }

    newNode->value = value;

    if (isEmpty(queue))
    {
        newNode->next = newNode;

        queue->front = newNode;
        queue->rear = newNode;
    }
    else
    {
        newNode->next = queue->front;
        queue->rear->next = newNode;
        queue->rear = newNode;
    }

    printf("%d inserted successfully.\n", value);
}

/* Delete an element */
int dequeue(Queue *queue)
{
    if (isEmpty(queue))
    {
        printf("Queue is empty.\n");
        return -1;
    }

    QueueNode *temp = queue->front;
    int value = temp->value;

    /* Only one node in the queue */
    if (queue->front == queue->rear)
    {
        queue->front = NULL;
        queue->rear = NULL;
    }
    else
    {
        queue->front = queue->front->next;
        queue->rear->next = queue->front;
    }

    free(temp);

    return value;
}

/* Display Queue */
void displayQueue(const Queue *queue)
{
    if (isEmpty(queue))
    {
        printf("Queue is empty.\n");
        return;
    }

    QueueNode *temp = queue->front;

    printf("Queue: ");

    do
    {
        printf("%d ", temp->value);
        temp = temp->next;
    } while (temp != queue->front);

    printf("\n");
}