#include <stdio.h>
#include <stdlib.h>

struct dq
{
    int info;
    struct dq *prev;
    struct dq *next;
};

typedef struct dq *dqptr;

dqptr head = NULL;
dqptr tail = NULL;

dqptr getnode();
void eq_front(int);
void eq_back(int);
int dq_front();
int dq_back();
void display();

int main()
{
    int choice, x;

    while (1)
    {
        printf("\n===== DEQUE USING DOUBLY LINKED LIST =====\n");
        printf("1. Add at Front\n");
        printf("2. Add at Rear\n");
        printf("3. Delete from Front\n");
        printf("4. Delete from Rear\n");
        printf("5. Display\n");
        printf("6. Exit\n");

        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            printf("Enter element: ");
            scanf("%d", &x);
            eq_front(x);
            break;

        case 2:
            printf("Enter element: ");
            scanf("%d", &x);
            eq_back(x);
            break;

        case 3:
            x = dq_front();
            if (x != -1)
                printf("Deleted element = %d\n", x);
            break;

        case 4:
            x = dq_back();
            if (x != -1)
                printf("Deleted element = %d\n", x);
            break;

        case 5:
            display();
            break;

        case 6:
            exit(0);

        default:
            printf("Invalid choice\n");
        }
    }

    return 0;
}

dqptr getnode()
{
    dqptr p;

    p = (dqptr)malloc(sizeof(struct dq));

    if (p == NULL)
    {
        printf("Memory allocation failed\n");
        exit(1);
    }

    p->prev = NULL;
    p->next = NULL;

    return p;
}

void eq_front(int x)
{
    dqptr p = getnode();

    p->info = x;

    if (head == NULL)
    {
        head = tail = p;
    }
    else
    {
        p->next = head;
        head->prev = p;
        head = p;
    }
}

void eq_back(int x)
{
    dqptr p = getnode();

    p->info = x;

    if (head == NULL)
    {
        head = tail = p;
    }
    else
    {
        tail->next = p;
        p->prev = tail;
        tail = p;
    }
}

int dq_front()
{
    dqptr temp;
    int item;

    if (head == NULL)
    {
        printf("Deque is Empty\n");
        return -1;
    }

    temp = head;
    item = temp->info;

    if (head == tail)
    {
        head = tail = NULL;
    }
    else
    {
        head = head->next;
        head->prev = NULL;
    }

    free(temp);

    return item;
}

int dq_back()
{
    dqptr temp;
    int item;

    if (tail == NULL)
    {
        printf("Deque is Empty\n");
        return -1;
    }

    temp = tail;
    item = temp->info;

    if (head == tail)
    {
        head = tail = NULL;
    }
    else
    {
        tail = tail->prev;
        tail->next = NULL;
    }

    free(temp);

    return item;
}

void display()
{
    dqptr temp;

    if (head == NULL)
    {
        printf("Deque is Empty\n");
        return;
    }

    printf("Deque: ");

    temp = head;

    while (temp != NULL)
    {
        printf("%d ", temp->info);
        temp = temp->next;
    }

    printf("\n");
}