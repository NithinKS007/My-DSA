#include <stdio.h>
#include <stdlib.h>

// A linked list node must store two things:

// The actual data.
// The address of the next node.

// So a node looks like this:

// +--------------------+
// | data = 10          |
// | next = ?           |
// +--------------------+

// The next field is not another value. It stores the address of another node.

// Node
//  ├── data
//  └── another Node
//         ├── data
//         └── another Node
//                ├── data
//                └── another Node
//                      ...

struct linked_list
{
    int data;
    struct linked_list *next;
    // This node also stores a pointer to another linked_list structure.
};

typedef struct linked_list list;

void create(list *);
void traverse(list *);
int count(list *);

list *insert_list(list *); // list * → returns the address of a linked list node
list *delete_list(list *); // list * → returns the address of a linked list node
list *find(list *, int);   // list * → returns the address of a linked list node

int main()
{
    list *head;

    head = (list *)malloc(sizeof(list));

    create(head);

    printf("\nCreated List:\n");
    traverse(head);

    printf("\nNumber of elements = %d\n", count(head));

    head = insert_list(head);

    printf("\nAfter Insertion:\n");
    traverse(head);

    head = delete_list(head);

    printf("\nAfter Deletion:\n");
    traverse(head);

    return 0;
}

void create(list *start)
{
    printf("Enter element (-1111 to stop): ");
    scanf("%d", &start->data);
    if (start->data == -1111)
        start->next = NULL;
    else
    {
        start->next = (list *)malloc(sizeof(list));
        create(start->next);
    }
}

void traverse(list *start)
{
    if (start->next != NULL)
    {
        printf("%d --> ", start->data);
        traverse(start->next);
    }
}
int count(list *start)
{
    if (start->next == NULL)
        return 0;
    else
        return (1 + count(start->next));
}

list *find(list *start, int key)
{
    if (start->next->data == key)
        return (start);
    if (start->next->next == NULL)
        return (NULL);
    else
        find(start->next, key);
}

list *insert_list(list *start)
{
    list *n, *f;
    int key, element;

    printf("enter value of new element");
    scanf("%d", &element);

    printf("eneter value of key element");
    scanf("%d", &key);

    if (start->data == key)
    {
        n = (list *)mallo(sizeof(list));
        n->data = element;
        n->next = start;
        start = n;
    }
    else
    {
        f = find(start, key);

        if (f == NULL)
            printf("\n key is not found \n");
        else
        {
            n = (list *)malloc(sizeof(list));
            n->data = element;
            n->next = f->next;
            f->next = n;
        }
    }
    return (start);
}

/*
==================== DYNAMIC MEMORY ALLOCATION (malloc) ====================

Why do we need malloc()?

In C, variables declared normally (e.g., int a; or list node;) are stored
in Stack Memory. Stack memory is created automatically when a function starts
and destroyed automatically when the function ends.

Example:
    void test()
    {
        int x = 10;
    }

When test() finishes, x is automatically removed from memory.

This is a problem for Linked Lists because we do not know in advance how many
nodes the user wants to create.

If we declare:
    list node;
only one node is created.

If we declare:
    list nodes[100];
the list can store only 100 nodes.

A Linked List should be able to grow while the program is running.
Therefore, we need Dynamic Memory Allocation.

--------------------------------------------------------------------------

malloc() stands for Memory Allocation.

Syntax:
    pointer = (datatype *)malloc(sizeof(datatype));

Example:
    list *node;
    node = (list *)malloc(sizeof(list));

Explanation:
1. sizeof(list) calculates the number of bytes required for one list node.
2. malloc() requests that much memory from the Operating System.
3. malloc() returns the ADDRESS of the allocated memory.
4. That address is stored inside the pointer 'node'.

Memory:

Stack                     Heap
-----                     -----------------
node -----> 0x1000  --->  +-------------+
                           | data    ?   |
                           | next    ?   |
                           +-------------+

Notice that 'node' stores only the address.
The actual structure is created in Heap Memory.

--------------------------------------------------------------------------

Why is a pointer required?

malloc() returns an ADDRESS, not the structure itself.
Since pointers store addresses, we declare:

    list *node;

instead of

    list node;

--------------------------------------------------------------------------

Why not use Stack Memory?

Stack memory disappears when a function ends.

Example (Wrong):

    list *createNode()
    {
        list node;
        return &node;
    }

Here, 'node' is destroyed when the function returns, making the returned
address invalid (Dangling Pointer).

Correct:

    list *createNode()
    {
        list *node = (list *)malloc(sizeof(list));
        return node;
    }

Now the node exists in Heap Memory and remains valid after the function returns.

--------------------------------------------------------------------------

free()

Memory allocated using malloc() is NOT released automatically.

To release it:

    free(node);

If free() is not called, the allocated memory remains occupied even though
the program no longer uses it. This is called a Memory Leak.

--------------------------------------------------------------------------

Key Points:

• Stack Memory -> Automatic allocation and deallocation.
• Heap Memory  -> Manual allocation using malloc().
• malloc() allocates memory at runtime.
• malloc() returns an address.
• The address must be stored in a pointer.
• Linked Lists use Heap Memory because their size is dynamic.
• Every deleted node should be released using free().
===========================================================================
*/

list *delete_list(list *start)
{
    int key;

    list *f, *temp;

    printf("Enter element to delete: ");
    scanf("%d", &key);

    if (start->data == key)
    {
        temp = start->next;
        free(start);
        start = temp;
    }
    else
    {
        f = find(start, key);
        if (f == NULL)
            printf("Key not found.\n");
        else
        {
            temp = f->next->next;
            free(f->next);
            f->next = temp;
        }
    }
    return (start);
}
