---
title: Automating a Python Script on Linux — Ubuntu/CentOS
date: "2021-07-01T23:46:37.121Z"
template: "post"
draft: false
slug: "automating-a-python-script-on-linux-ubuntu-centos"
category: "Python Automation"
tags:
  - "Python"
  - "Automation"
  - "Linux"
description: "Sample text"
socialImage: "/media/image-2.jpg"
---

# Automating a Python Script on Linux — Ubuntu/CentOS

Photo by Shahadat Rahman on Unsplash

This is a tutorial for the beginners out there.

We’re going to see a few ways to automate a python script in the background on Linux.

*At some point in our developer lives, we are bound to come across a situation where we need to automate single/multiple scripts to finish up a task for us.*

I recently came across a task where there was a bunch of duplicate data that had to be fixed. I made a python script to handle the process of identifying the duplication, manipulating it and deleting it accordingly. But this was done on a small data-set within a local environment.

Finally, it came to running it over multiple tables/indexes over a large data-set and I couldn’t just sit and wait for my script to finish while it ran in a terminal session. I needed to find a way to automate the execution as a background process.

### Enough talk, let’s see the code!

Our basic python script that takes in a command line argument:

    #!/usr/local/bin/python3

    # Name: script.py

    argument = sys.argv[1]
    print("Hello automated script. Passed in argument: " + argument)

Now suppose I want to run this script for multiple arguments.

For this, I make another ‘driver’ python script, like so:

    #!/usr/local/bin/python3

    # Name: driver.py

    my_args = ['first', 'second', 'third']

    for arg in my_args:
      os.system('python3 script.py ' + arg)

Finally, we come to the automation in Linux. Be sure to set the correct permissions for these files to allow execution:

    chmod +x driver.py

Now we can run the script with the [nohup](https://en.wikipedia.org/wiki/Nohup) command which ignores the hangup signal. This essentially means that we can close the terminal without the execution terminating due to that. And then we append the important *&* at the end that runs the script in the background:

    nohup python3 driver.py &

The output of this file will be saved inside nohup.out by default but we can specify a different file for this:

    nohup python3 driver.py > /path/to/file.log &

After running this, to find the process running in the background, we can see it with the *ps aux* command. More specifically, we can grep for it:

    ps aux | grep driver.py

Note: The output of the process will be available post completed execution. This is because the output is buffering through the execution. If we want to avoid this buffering and see the output during execution, we can add the -u flag:

    nohup python3 -u driver.py > /path/to/file.log &

Thanks for reading and I hope this was simple and detailed enough for you!
