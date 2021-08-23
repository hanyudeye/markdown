(message "hello,world")

(round (/ (+ 23 23.2)  0.2 )  0.1)

(stringp "hello" )
(stringp 1)

(substring "hello" 0 2)

(substring "hello" -3 -1)

(with-temp-buffer (insert "abcde"))

( with-temp-buffer (insert  "abcdefg") (buffer-substring 2 4))

(string-prefix-p "hel" "hello")

(defun string/reverse (str)
  "reverse str"
  (apply #'string
         (reverse (string-to-list str))))

(string/reverse "abc")


(delete-region (region-beginning) (region-end))

( let ((beg (point)))
  (forward-line 1)
  (forward-char -1)
  (delete-region beg (point)))
(defun delete-a-word() 
( let ((beg (point)))
  (forward-word 1)
  (delete-region beg (point)))
)

(delete-a-word)
