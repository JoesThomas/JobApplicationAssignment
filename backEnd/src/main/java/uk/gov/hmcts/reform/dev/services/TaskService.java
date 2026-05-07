package uk.gov.hmcts.reform.dev.services;

import org.springframework.stereotype.Service;
import uk.gov.hmcts.reform.dev.models.Task;
import uk.gov.hmcts.reform.dev.models.TaskStatus;

import java.util.*;

@Service
public class TaskService {
    private final Map<UUID, Task> tasks = new HashMap<>();

    public Task createTask(Task task) {
        tasks.put(task.getId(), task);
        return task;
    }

    public Collection<Task> getAllTasks() {
        return tasks.values();
    }

    public Task getTaskById(UUID id) {
        return tasks.get(id);
    }

    public Task updateTaskStatus(UUID id, TaskStatus status) {
        Task task = tasks.get(id);
        if (task != null) {
            task.setStatus(status);
        }
        return task;
    }

    public boolean deleteTask(UUID id) {
        return tasks.remove(id) != null;
    }
}