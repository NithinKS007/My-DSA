#include <stdio.h>
#include <stdlib.h>

struct dl_list
{
    int data;
    struct dl_list *left;
    struct dl_list *right;
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
        return NULL;

    dlist *node = (dlist *)malloc(sizeof(dlist));

    node->data = value;
    node->left = NULL;
    node->right = dl_create();

    if (node->right != NULL)
        node->right->left = node;

    return node;
}

/* Traverse from head to tail */
void traverse_forward(dlist *start)
{
    if (start == NULL)
        return;

    dlist *temp = start;

    while (temp != NULL)
    {
        printf("%d ", temp->data);

        if (temp->right == NULL)
            break;

        temp = temp->right;
    }
}

/* Traverse from tail to head */
void traverse_backward(dlist *start)
{
    if (start == NULL)
        return;

    dlist *temp = start;

    /* Move to the last node */
    while (temp->right != NULL)
        temp = temp->right;

    /* Traverse backwards */
    while (temp != NULL)
    {
        printf("%d ", temp->data);
        temp = temp->left;
    }
}