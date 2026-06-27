#include <stdio.h>
#include <stdlib.h>

struct NODE
{
    struct NODE *left;
    int value;
    struct NODE *right;
};

typedef struct StackNode
{
    struct NODE *data;
    struct StackNode *next;
} StackNode;

void create_tree(struct NODE *curr, struct NODE *newNode);
void inorder(struct NODE *curr);
void preorder(struct NODE *curr);
void postorder(struct NODE *curr);
void preorderNonRecursive(struct NODE *tree);

void create_tree(struct NODE *curr, struct NODE *newNode)
{
    if (newNode->value <= curr->value)
    {
        if (curr->left != NULL)
            create_tree(curr->left, newNode);
        else
            curr->left = newNode;
    }
    else
    {
        if (curr->right != NULL)
            create_tree(curr->right, newNode);
        else
            curr->right = newNode;
    }
}

void inorder(struct NODE *curr)
{
    if (curr == NULL)
    {
        return;
    }
    inorder(curr->left);
    printf("%d ", curr->value);
    inorder(curr->right);
}

void preorder(struct NODE *curr)
{
    if (curr == NULL)
    {
        return;
    }

    printf("%d ", curr->value);
    preorder(curr->left);
    preorder(curr->right);
}

void postorder(struct NODE *curr)
{
    if (curr == NULL)
    {
        return;
    }

    postorder(curr->left);
    postorder(curr->right);
    printf("%d ", curr->value);
}

// Non-recursive implementation of binary tree traversals

void push(StackNode **top, struct NODE *treeNode)
{
    StackNode *temp;

    temp = (StackNode *)malloc(sizeof(StackNode));

    if (temp == NULL)
    {
        printf("Memory Allocation Failed\n");
        return;
    }

    temp->data = treeNode;
    temp->next = *top;
    *top = temp;
}

struct NODE *pop(StackNode **top)
{
    if (*top == NULL)
        return NULL;

    StackNode *temp = *top;
    struct NODE *treeNode = temp->data;

    *top = temp->next;
    free(temp);

    return treeNode;
}

int empty(StackNode *top)
{
    return top == NULL;
}

void preorderNonRecursive(struct NODE *tree)
{
    StackNode *stack = NULL;

    if (tree == NULL)
        return;

    push(&stack, tree);

    while (!empty(stack))
    {
        tree = pop(&stack);

        printf("%d ", tree->value);

        if (tree->right != NULL)
            push(&stack, tree->right);

        if (tree->left != NULL)
            push(&stack, tree->left);
    }
}
