#include <stdio.h>

#define MAX 30      /* Total size of the array */
#define NQ 3        /* Number of queues */

int mqueue[MAX];
int front[NQ + 1];
int rear[NQ + 1];

void initialize();
void addmq(int, int);
int delmq(int);

int main()
{
    int choice, qno, x;

    initialize();

    while (1)
    {
        printf("\n----- MULTIPLE QUEUE USING ARRAY -----\n");
        printf("1. Add Element\n");
        printf("2. Delete Element\n");
        printf("3. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter Queue Number (0-%d): ", NQ - 1);
            scanf("%d", &qno);

            if (qno < 0 || qno >= NQ)
            {
                printf("Invalid Queue Number\n");
                break;
            }

            printf("Enter element: ");
            scanf("%d", &x);

            addmq(qno, x);
            break;

        case 2:
            printf("Enter Queue Number (0-%d): ", NQ - 1);
            scanf("%d", &qno);

            if (qno < 0 || qno >= NQ)
            {
                printf("Invalid Queue Number\n");
                break;
            }

            x = delmq(qno);

            if (x != -1)
                printf("Deleted element = %d\n", x);

            break;

        case 3:
            return 0;

        default:
            printf("Invalid Choice\n");
        }
    }
}

void initialize()
{
    int i;
    int size = MAX / NQ;

    for (i = 0; i < NQ; i++)
    {
        front[i] = i * size;
        rear[i] = i * size;
    }

    front[NQ] = MAX;
}

void addmq(int i, int x)
{
    if (rear[i] + 1 == front[i + 1])
    {
        printf("Queue is Full\n");
    }
    else
    {
        rear[i]++;
        mqueue[rear[i]] = x;
    }
}

int delmq(int i)
{
    int x;

    if (front[i] == rear[i])
    {
        printf("Queue is Empty\n");
        return -1;
    }
    else
    {
        front[i]++;
        x = mqueue[front[i]];
        return x;
    }
}