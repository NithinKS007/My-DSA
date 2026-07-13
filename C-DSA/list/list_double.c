#include <stdio.h>
#include <stdlib.h>

struct dl_list
{
    int data;
    struct dl_list *prev;
    struct dl_list *next;
};

typedef struct dl_list dlist;

/* Function Prototypes */
dlist *dl_create();
void traverse_forward(dlist *);
void traverse_backward(dlist *);

int main()
{
    dlist *head;

    head = dl_create();

    printf("\nForward Traversal:\n");
    traverse_forward(head);

    printf("\n\nBackward Traversal:\n");
    traverse_backward(head);

    return 0;
}

/* Creates a doubly linked list recursively */
dlist *dl_create()
{
    int value;

    printf("Enter element (-1111 to stop): ");
    scanf("%d", &value);

    if (value == -1111)
    {
        return NULL;
    }

    dlist *node = (dlist *)malloc(sizeof(dlist));

    node->data = value;
    node->prev = NULL;
    node->next = dl_create();

    if (node->next != NULL)
        node->next->prev = node;

    return node;
}

/* Traverse from head to tail */
void traverse_forward(dlist *start)
{
    if (start == NULL)
    {
        return;
    }

    dlist *temp = start;

    while (temp != NULL)
    {
        printf("%d ", temp->data);

        if (temp->next == NULL)
        {
            break;
        }

        temp = temp->next;
    }
}

/* Traverse from tail to head */
void traverse_backward(dlist *start)
{
    if (start == NULL)
        return;

    dlist *temp = start;

    /* Move to the last node */
    while (temp->next != NULL)
        temp = temp->next;

    /* Traverse backwards */
    while (temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->prev;
    }
}