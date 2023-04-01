SELECT b.id,b.name, a.name as parent_name
FROM parent as b
left join parent as a
on a.id = b.parent_id 

select  a.id,a.name, b.name as parent_name
from parent as a
left join parent as b
on b.id = a.parent_id