;; (global-set-key "\M-?" 'help-command)

(defun point-to-top()
"光标跳到开头"
(interactive)
(move-to-window-line 0)
)

(global-set-key "\M-," 'point-to-top)

(defun other-window-back(n)
"回到上n个窗口"
(interactive "p")

(other-window (- n))
)

(delete-ar )
(insert-char "abcdefg")
(insert-char )

(defun other-window-back(&optional n)
  "回到上n个窗口"
  (interactive "p")
  (if n
      (other-window (- n))
    (other-window -1)
    )
  )
