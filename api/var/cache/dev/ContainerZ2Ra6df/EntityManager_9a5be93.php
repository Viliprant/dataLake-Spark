<?php

namespace ContainerZ2Ra6df;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/src/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder0d4e9 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerfb98e = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties4b0cb = [
        
    ];

    public function getConnection()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getConnection', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getMetadataFactory', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getExpressionBuilder', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'beginTransaction', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getCache', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getCache();
    }

    public function transactional($func)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'transactional', array('func' => $func), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->transactional($func);
    }

    public function wrapInTransaction(callable $func)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'wrapInTransaction', array('func' => $func), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->wrapInTransaction($func);
    }

    public function commit()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'commit', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->commit();
    }

    public function rollback()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'rollback', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getClassMetadata', array('className' => $className), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'createQuery', array('dql' => $dql), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'createNamedQuery', array('name' => $name), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'createQueryBuilder', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'flush', array('entity' => $entity), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'clear', array('entityName' => $entityName), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->clear($entityName);
    }

    public function close()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'close', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->close();
    }

    public function persist($entity)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'persist', array('entity' => $entity), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'remove', array('entity' => $entity), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'refresh', array('entity' => $entity), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'detach', array('entity' => $entity), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'merge', array('entity' => $entity), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getRepository', array('entityName' => $entityName), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'contains', array('entity' => $entity), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getEventManager', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getConfiguration', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'isOpen', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getUnitOfWork', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getProxyFactory', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'initializeObject', array('obj' => $obj), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'getFilters', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'isFiltersStateClean', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'hasFilters', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return $this->valueHolder0d4e9->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerfb98e = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder0d4e9) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder0d4e9 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder0d4e9->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, '__get', ['name' => $name], $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        if (isset(self::$publicProperties4b0cb[$name])) {
            return $this->valueHolder0d4e9->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder0d4e9;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder0d4e9;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder0d4e9;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder0d4e9;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, '__isset', array('name' => $name), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder0d4e9;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder0d4e9;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, '__unset', array('name' => $name), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder0d4e9;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder0d4e9;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, '__clone', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        $this->valueHolder0d4e9 = clone $this->valueHolder0d4e9;
    }

    public function __sleep()
    {
        $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, '__sleep', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;

        return array('valueHolder0d4e9');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerfb98e = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerfb98e;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerfb98e && ($this->initializerfb98e->__invoke($valueHolder0d4e9, $this, 'initializeProxy', array(), $this->initializerfb98e) || 1) && $this->valueHolder0d4e9 = $valueHolder0d4e9;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder0d4e9;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder0d4e9;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
