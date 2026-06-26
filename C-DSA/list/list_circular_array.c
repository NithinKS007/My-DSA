#include <stdio.h>
#include <stdlib.h>
#define NULL 0
#define END_VALUE -1111

typedef struct linked_list
{
    int data;
    struct linked_list *next;
} clist;

clist *head, *s;
void create_clist(clist *);
void traverse(clist *);
int count(clist *);

clist *find(clist *, int);
clist *insert_clist(clist *);
clist *delete_clist(clist *);

int main()
{
    head = (clist *)malloc(sizeof(clist));
    s = head;
    create_clist(head);
    traverse(head);
    printf("\n number of elements in the clist %d \n", count(head));
}

void create_clist(clist *start)
{
    printf("input the element END_VALUE for coming out of the loop\n");
    scanf("%d", &start->data);
    if (start->data == END_VALUE)
        start->next = s;
    else
    {
        start->next = (clist *)malloc(sizeof(clist));
        create_clist(start->next);
    }
}

void traverse(clist *start)
{
    if (start->next != s)
    {
        printf("data is %d \t next element address is %u\n", start->data, start->next);
        traverse(start->next);
    }
    if (start->next == s)
        printf("data is %d \t next element address is %u\n", start->data, start->next);
}
int count(clist *start)
{
    if (start->next == s)
        return 0;
    else
        return (1 + count(start->next));
}

clist *insert_clist(clist *start)
{
    clist *n, *n1;
    int key, x;
    printf("enter value of new element");
    scanf("%d", &x);
    printf("eneter value of key element");
    scanf("%d", &key);
    if (start->data == key)
    {
        n = (clist *)malloc(sizeof(clist));
        n->data = x;
        n->next = start;
        start = n;
    }
    else
    {
        n1 = find(start, key);
        if (n1 == NULL)
            printf("\n key is not found\n");
        else
        {
            n = (clist *)malloc(sizeof(clist));
            n->data = x;
            n->next = n1->next;
            n1->next = n;
        }
    }
    return (start);
}

clist *find(clist *start, int key)
{
    if (start->next->data == key)
        return (start);
    if (start->next->next == NULL)
        return (NULL);
    else
        find(start->next, key);
}

clist *delete_clist(clist *start)
{
    int key;
    clist *f, *temp;
    printf("\n enter the value of element to be deleted \n");
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
            printf("\n key not fund");
        else
        {
            temp = f->next->next;
            free(f->next);
            f->next = temp;
        }
    }
    return (start);
}