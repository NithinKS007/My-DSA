// 1) Write a function to print the memory location(s) which are used to store the
// data in a single linked list ?

// 2) Can we use doubly linked list as a circular linked list? If yes, Explain.

// 3) Write the differences between Doubly linked list and Circular linked list.

// 4) Write a program to count the number of items stored in a single linked list.

// 5) Write a function to check the overflow condition of a list represented by an
// array.

// 1)

// void print_location(struct node *head)
// {
//     temp = head;
//     while (temp->next != NULL)
//     {
//         printf("%u", temp);
//         temp = temp->next;
//     }
//     printf("%u", temp);
// }

//  4)

// void count_items(struct node *head)
// {
//     int count = 0;
//     temp = head;
//     while (temp->next != NULL)
//     {
//         count++;
//     }
//     count++;
//     pintf("total items = %d", count);
// }

// 5)


// void Is_Overflow(int max_size, int last_element_position)
// {
//     if (last_element_position == max_size)
//         printf("List Overflow");
//     else
//         printf("not Overflow");
// }
