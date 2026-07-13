#include <stdio.h>
#include <stdlib.h>

/* Node of the queue */
typedef struct QueueNode
{
    int data;
    struct QueueNode *next;
} QueueNode;

/* Queue structure */
typedef struct
{
    QueueNode *front;
    QueueNode *rear;
} Queue;

/* Function Prototypes */
int isEmpty(const Queue *queue);
void enqueue(Queue *queue, int value)
int dequeue(Queue *queue);
void display(const Queue *queue);

int main(void)
{
    Queue queue;
    int choice;
    int value;

    queue.front = NULL;
    queue.rear = NULL;

    while (1)
    {
        printf("\n========== QUEUE MENU ==========\n");
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
            {
                printf("Dequeued: %d\n", value);
            }

            break;

        case 3:
            display(&queue);
            break;

        case 4:
            printf("Program terminated.\n");
            return 0;

        default:
            printf("Invalid choice.\n");
        }
    }
}

int isEmpty(const Queue *queue)
{
    return queue->front == NULL;
}

void enqueue(Queue *queue, int value)
{
    QueueNode *newNode = malloc(sizeof(QueueNode));

    if (newNode == NULL)
    {
        printf("Memory allocation failed.\n");
        return;
    }

    newNode->data = value;
    newNode->next = NULL;

    if (isEmpty(queue))
    {
        queue->front = newNode;
        queue->rear = newNode;
    }
    else
    {
        queue->rear->next = newNode;
        queue->rear = newNode;
    }

    printf("%d inserted successfully.\n", value);
}

int dequeue(Queue *queue)
{
    if (isEmpty(queue))
    {
        printf("Queue is empty.\n");
        return -1;
    }

    QueueNode *temp = queue->front;
    int value = temp->data;

    queue->front = queue->front->next;

    if (queue->front == NULL)
    {
        queue->rear = NULL;
    }

    free(temp);

    return value;
}

void display(const Queue *queue)
{
    if (isEmpty(queue))
    {
        printf("Queue is empty.\n");
        return;
    }

    QueueNode *current = queue->front;

    printf("Front -> ");

    while (current != NULL)
    {
        printf("%d ", current->data);
        current = current->next;
    }

    printf("<- Rear\n");
}