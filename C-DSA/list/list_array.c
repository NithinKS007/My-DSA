#include <stdio.h>
#include <stdbool.h>

// With typedef, you create an alias (another name) for the structure.
// Now list becomes a new type name.

typedef struct
{
    int data[10];
    int count;
} list;

void create(list *);
void traverse(list *);
void insert(list *, int, int);
void delete_list(list *, int);

void create(list *start)
{
    // start is a pointer to a list.
    // start receives the address of l.
    // So inside the function:

    // start
    //   |
    //   |
    //   ▼
    // +------------------------+
    // | data[10]               |
    // | count                  |
    // +------------------------+
    //         l

    // start points to the original variable l.

    int i = 0;        // Keeps track of the current array address
    bool flag = true; // flag is used as a flag to control the loop.
                      // true means "keep taking input."
                      // false means "stop."

    while (flag && i < 10)
    {
        printf("Enter value %d (0 to stop): ", i);
        // Go to the structure that start points to and access
        // its member[i].
        scanf("%d", &start->data[i]);

        if (start->data[i] == 0)
            flag = false;
        else
            i++;
    }

    start->count = i;
}

void traverse(list *start)
{
    for (int i = 0; i < start->count; i++)
    {
        printf("%d ", start->data[i]);
        printf("\n");
    }
}

// Arrays have fixed positions.
// To insert a new element, you must first make space for
// it by shifting existing elements to the right.
void insert(list *start, int position, int element)
{

    // Because the next free position is index start->count.
    int temp = start->count;

    if (start->count == 10)
    {
        printf("List is Full.\n");
        return;
    }

    if (position < 0 || position > start->count)
    {
        printf("Invalid Position.\n");
        return;
    }

    // Inserts an element at a given position by
    // shifting existing elements
    // one position to the right and updating the list count.
    while (temp >= position)
    {
        start->data[temp + 1] = start->data[temp];
        temp--;
    }
    start->data[position] = element;
    start->count++;
}

// When you insert, you shift elements to the right to make space.
// When you delete, you shift elements to the left to fill the empty space.

void delete_list(list *start, int position)
{
    int temp = position;
    if (position < 0 || position >= start->count)
    {
        printf("Invalid Position.\n");
        return;
    }

    printf("Deleted Element: %d\n", start->data[position]);

    // Then shifts all remaining elements one position to the left
    // to fill the empty space and decreases the element count.
    while (temp <= start->count - 1)
    {
        start->data[temp] = start->data[temp + 1];
        temp++;
    }
    start->count = start->count - 1;
}

/*
Example:

Before Deletion:
Index : 0   1   2   3   4
Value :10  20  30  40  50
count = 5

Delete position = 2 (Delete 30)

Iteration 1:
temp = 2
data[2] = data[3]

Index : 0   1   2   3   4
Value :10  20  40  40  50

Iteration 2:
temp = 3
data[3] = data[4]

Index : 0   1   2   3   4
Value :10  20  40  50  50

Loop Ends

count = count - 1

Final List:
Index : 0   1   2   3
Value :10  20  40  50
count = 4

Note:
The last 50 still exists in memory, but it is ignored because
count = 4. Only the first 4 elements are considered part of the list.
*/

int main()
{
    list l;
    int position, element;

    // Passing the memory address of the struct list l
    create(&l);

    printf("\nCurrent List:\n");
    traverse(&l);

    printf("Enter position to insert: ");
    scanf("%d", &position);

    printf("Enter element: ");
    scanf("%d", &element);

    insert(&l, position, element);

    printf("\nAfter Insertion:\n");
    traverse(&l);

    printf("Enter position to delete: ");
    scanf("%d", &position);

    delete_list(&l, position);

    printf("\nAfter Deletion:\n");
    traverse(&l);

    return 0;
}